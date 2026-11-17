import pathlib,re,json,csv,html,argparse
import yaml
p=argparse.ArgumentParser();p.add_argument('--root',default='.');p.add_argument('--output',required=True);a=p.parse_args()
root=pathlib.Path(a.root).resolve();out=pathlib.Path(a.output).resolve()
if out==root or root in out.parents: raise SystemExit('Output must be outside repository')
out.mkdir(parents=True,exist_ok=True)
files={str(f.relative_to(root)):f for f in root.rglob('*') if f.is_file() and not f.is_symlink() and not any(x in ('.git','_site','vendor','node_modules','.jekyll-cache') for x in f.relative_to(root).parts)}
texts={k:v.read_text(errors='replace') for k,v in files.items() if v.suffix.lower() in ('.html','.md','.markdown','.liquid','.css','.scss','.js','.yml','.yaml','.json','.xml','.txt')}
try: config=yaml.safe_load(texts.get('_config.yml','')) or {}
except yaml.YAMLError: config={}
rows=[]
for name in sorted(files):
 t=texts.get(name,''); fm={}; unknown=False
 m=re.match(r'^---\s*\n(.*?)\n---\s*(?:\n|$)',t,re.S)
 if m:
  try: fm=yaml.safe_load(m[1]) or {}; assert isinstance(fm,dict)
  except (yaml.YAMLError,AssertionError): fm={};unknown=True
 kind=name.split('/')[0] if '/' in name else 'root'
 pub='Not a standalone page' if kind in ('_includes','_layouts','_data') else 'Draft' if kind=='_drafts' else 'Unknown' if unknown else 'Explicitly unpublished' if fm.get('published') is False else 'Explicitly enabled (unverified)' if fm.get('published') is True else 'Default / build not verified' if m else 'Not assessed'
 refs=[]
 for src,s in texts.items():
  if src==name or src.startswith(('.github/','scripts/')): continue
  if kind=='_includes': hit=re.search(r'{%[-\s]*include\s+[\"\']?'+re.escape(name[len('_includes/'):])+r'(?=[\s\"\'%}]|$)',s)
  elif kind=='_layouts': hit=re.search(r'^\s*layout:\s*[\"\']?'+re.escape(pathlib.Path(name).stem)+r'[\"\']?\s*$',s,re.M)
  else: hit=name in s or '/'+name in s
  if hit: refs.append(src)
 usage=('Referenced (static)' if refs else 'Review: no static references') if kind in ('_includes','_layouts','assets','_data') else 'Not assessed'
 rows.append(dict(file=name,kind=kind,publication=pub,usage=usage,references='; '.join(refs)))
for ext in ('json','csv'):
 with (out/f'audit.{ext}').open('w',encoding='utf-8',newline='') as f:
  if ext=='json':json.dump(rows,f,ensure_ascii=False,indent=2)
  else:
   w=csv.DictWriter(f,fieldnames=['file','kind','publication','usage','references']);w.writeheader();w.writerows(rows)

def render_report(rows, target, label):
 from collections import Counter
 e=lambda s: html.escape(str(s), quote=True)
 kinds=sorted({r['kind'] for r in rows}); pubs=sorted({r['publication'] for r in rows}); usages=sorted({r['usage'] for r in rows})
 def options(values): return '<option value="">All</option>'+''.join(f'<option>{e(v)}</option>' for v in values)
 counts=Counter(r['usage'] for r in rows)
 stats=[('Total files',len(rows)),('Static references',counts['Referenced (static)']),('Needs review',counts['Review: no static references']),('Not assessed',counts['Not assessed'])]
 cards=''.join(f'<div class="metric"><span>{e(k)}</span><strong>{v:,}</strong></div>' for k,v in stats)
 body=[]
 for r in rows:
  refs=[x for x in r['references'].split('; ') if x]; detail=(f'<details><summary>{len(refs)} source files</summary><ul>'+''.join(f'<li>{e(x)}</li>' for x in refs)+'</ul></details>') if refs else '—'
  body.append(f'<tr data-kind="{e(r["kind"])}" data-pub="{e(r["publication"])}" data-use="{e(r["usage"])}"><td data-label="File" class="filename">{e(r["file"])}</td><td data-label="Folder">{e(r["kind"])}</td><td data-label="Publication">{e(r["publication"])}</td><td data-label="Usage">{e(r["usage"])}</td><td data-label="References">{detail}</td></tr>')
 page='''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Jekyll Site Auditor</title><style>
 *{box-sizing:border-box}body{margin:0;background:#f5f4f0;color:#202321;font:14px/1.5 system-ui,-apple-system,sans-serif}main{max-width:1240px;margin:auto;padding:24px}h1{font-size:28px;margin:0}p{color:#525953} .metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:24px 0}.metric{background:white;border:1px solid #d8ddd8;border-radius:10px;padding:16px}.metric span{display:block;color:#59645e}.metric strong{font-size:28px;display:block}.filters{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:10px;margin:16px 0}label{display:block;font-weight:600;min-width:0}input,select{display:block;width:100%;min-width:0;font:inherit;padding:10px;border:1px solid #aeb8b0;border-radius:6px;background:white;color:#202321}table{width:100%;table-layout:fixed;border-collapse:collapse;background:white}th,td{text-align:left;vertical-align:top;padding:12px;border-bottom:1px solid #dfe3df;overflow-wrap:anywhere}th{background:#e7ebe6}th:first-child{width:32%}th:nth-child(2){width:12%}th:nth-child(5){width:18%}summary{cursor:pointer;color:#365e4b}ul{padding-left:18px;margin:6px 0}li{margin-bottom:5px}tr[hidden]{display:none!important}button{font:inherit;padding:7px 12px;border:1px solid #aeb8b0;border-radius:6px;background:white;color:#202321;cursor:pointer} .bar{display:flex;justify-content:space-between;align-items:center;gap:8px;margin:12px 0} @media(max-width:760px){main{padding:16px}.metrics,.filters{grid-template-columns:repeat(2,minmax(0,1fr))}.metric{padding:12px}.metric strong{font-size:23px}table,tbody,tr,td{display:block;width:100%}thead{display:none}tr{padding:12px;margin-bottom:10px;border:1px solid #d8ddd8;border-radius:8px;background:white}td{padding:4px 0;border:0}td:before{content:attr(data-label) ": ";font-weight:600;color:#59645e}.filename{font-weight:600}.filename:before{display:none}details{display:inline-block;max-width:100%}}
 </style></head><body><main><h1>Jekyll Site Auditor</h1><p>VERSION 1.1 · LABEL · Read-only static analysis</p><p>Publication is not build-verified. Static references do not prove live use; missing references do not prove a file is unused. Dynamic references, configuration defaults, collections and theme files may affect results.</p><div class="metrics">CARDS</div><div class="filters"><label>Search<input id="q" type="search" placeholder="File or reference"></label><label>Folder<select id="kind">KINDS</select></label><label>Publication<select id="pub">PUBS</select></label><label>Usage<select id="use">USES</select></label></div><div class="bar"><span id="count" aria-live="polite">TOTAL files</span><button id="reset" type="button">Reset filters</button></div><table><thead><tr><th>File</th><th>Folder</th><th>Publication</th><th>Usage</th><th>References</th></tr></thead><tbody>ROWS</tbody></table></main><script>
 (function(){var q=document.getElementById('q'),k=document.getElementById('kind'),p=document.getElementById('pub'),u=document.getElementById('use'),rows=Array.from(document.querySelectorAll('tbody tr'));function filter(){var n=0,term=q.value.trim().toLowerCase();rows.forEach(function(r){var show=(!k.value||r.dataset.kind===k.value)&&(!p.value||r.dataset.pub===p.value)&&(!u.value||r.dataset.use===u.value)&&(!term||r.textContent.toLowerCase().indexOf(term)!==-1);r.hidden=!show;if(show)n++;});document.getElementById('count').textContent=n.toLocaleString()+' of '+rows.length.toLocaleString()+' files';}[q,k,p,u].forEach(function(x){x.addEventListener('input',filter);x.addEventListener('change',filter);});document.getElementById('reset').addEventListener('click',function(){[q,k,p,u].forEach(function(x){x.value='';});filter();});filter();})();</script></body></html>'''
 replacements={'LABEL':e(label),'CARDS':cards,'KINDS':options(kinds),'PUBS':options(pubs),'USES':options(usages),'TOTAL':str(len(rows)),'ROWS':''.join(body)}
 page=re.sub(r'\b(?:LABEL|CARDS|KINDS|PUBS|USES|TOTAL|ROWS)\b',lambda m: replacements[m.group()],page)
 target.write_text(page,encoding='utf-8')

import os
render_report(rows,out/'audit.html',os.environ.get('GITHUB_REPOSITORY',root.name))
