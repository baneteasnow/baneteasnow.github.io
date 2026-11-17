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
e=html.escape
body=''.join('<tr>'+''.join('<td>'+e(str(v))+'</td>' for v in r.values())+'</tr>' for r in rows)
(out/'audit.html').write_text('''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Jekyll Site Auditor</title><style>body{font:15px system-ui;margin:24px;color:#222;background:#faf9f6}input{padding:12px;width:min(90%,420px)}table{border-collapse:collapse;width:100%;font-size:13px}td,th{text-align:left;padding:10px;border-bottom:1px solid #ddd;overflow-wrap:anywhere}section{overflow:auto}</style><h1>Jekyll Site Auditor</h1><p>Read-only static inventory. Publication is not verified by a Jekyll build. Dynamic references, configuration defaults, collections, theme files and external links may affect results. Never delete files based solely on this report.</p><p>Files: '''+str(len(rows))+'''</p><input aria-label="Filter files" placeholder="Filter files or status" id="q"><section><table><thead><tr><th>File</th><th>Kind</th><th>Publication</th><th>Usage</th><th>References</th></tr></thead><tbody>'''+body+'''</tbody></table></section><script>document.querySelector('#q').addEventListener('input',e=>document.querySelectorAll('tbody tr').forEach(r=>r.hidden=!r.textContent.toLowerCase().includes(e.target.value.toLowerCase())))</script></html>''',encoding='utf-8')
