/*!
 * Simple-Jekyll-Search v1.7.2 (https://github.com/christian-fei/Simple-Jekyll-Search)
 * Copyright 2015-2018, Christian Fei
 * Licensed under the MIT License.
 */
/*
!(function () {
	"use strict"
	var f = {
		load: function w(t, e) {
			var n = (function r() {
				return window.XMLHttpRequest
					? new window.XMLHttpRequest()
					: new ActiveXObject("Microsoft.XMLHTTP")
			})()
			n.open("GET", t, !0),
				(n.onreadystatechange = (function i(e, n) {
					return function () {
						if (4 === e.readyState && 200 === e.status)
							try {
								n(null, JSON.parse(e.responseText))
							} catch (t) {
								n(t, null)
							}
					}
				})(n, e)),
				n.send()
		},
	}
	;(function y(t) {
		if (
			!(function e(t) {
				return (
					!!t && "undefined" != typeof t.required && t.required instanceof Array
				)
			})(t)
		)
			throw new Error("-- OptionsValidator: required options missing")
		if (!(this instanceof y)) return new y(t)
		var r = t.required
		;(this.getRequiredOptions = function () {
			return r
		}),
			(this.validate = function (e) {
				var n = []
				return (
					r.forEach(function (t) {
						"undefined" == typeof e[t] && n.push(t)
					}),
					n
				)
			})
	})
	var n = function g(t, e) {
			var n = e.length,
				r = t.length
			if (n < r) return !1
			if (r === n) return t === e
			t: for (var i = 0, o = 0; i < r; i++) {
				for (var u = t.charCodeAt(i); o < n; )
					if (e.charCodeAt(o++) === u) continue t
				return !1
			}
			return !0
		},
		e = new (function t() {
			this.matches = function (t, e) {
				return n(e.toLowerCase(), t.toLowerCase())
			}
		})()
	var r = new (function O() {
		this.matches = function (e, t) {
			return (
				!!e &&
				((e = e.trim().toLowerCase()),
				(t = t.trim().toLowerCase()).split(" ").filter(function (t) {
					return 0 <= e.indexOf(t)
				}).length === t.split(" ").length)
			)
		}
	})()
	var l = {
		put: function z(t) {
			if (c(t)) return s(t)
			if (
				(function e(t) {
					return (
						Boolean(t) && "[object Array]" === Object.prototype.toString.call(t)
					)
				})(t)
			)
				return (function i(t) {
					var e = []
					a()
					for (var n = 0, r = t.length; n < r; n++) c(t[n]) && e.push(s(t[n]))
					return e
				})(t)
			return undefined
		},
		clear: a,
		search: function S(t) {
			return t
				? (function a(t, e, n, r) {
						for (var i = [], o = 0; o < t.length && i.length < r.limit; o++) {
							var u = d(t[o], e, n, r)
							u && i.push(u)
						}
						return i
				  })(o, t, u.searchStrategy, u).sort(u.sort)
				: []
		},
		setOptions: function q(t) {
			;((u = t || {}).fuzzy = t.fuzzy || !1),
				(u.limit = t.limit || 10),
				(u.searchStrategy = t.fuzzy ? e : r),
				(u.sort = t.sort || i)
		},
	}
	function i() {
		return 0
	}
	var o = [],
		u = {}
	function a() {
		return (o.length = 0), o
	}
	function c(t) {
		return Boolean(t) && "[object Object]" === Object.prototype.toString.call(t)
	}
	function s(t) {
		return o.push(t), o
	}
	function d(t, e, n, r) {
		for (var i in t) if (!p(t[i], r.exclude) && n.matches(t[i], e)) return t
	}
	function p(t, e) {
		for (var n = !1, r = 0, i = (e = e || []).length; r < i; r++) {
			var o = e[r]
			!n && new RegExp(t).test(o) && (n = !0)
		}
		return n
	}
	;(u.fuzzy = !1),
		(u.limit = 10),
		(u.searchStrategy = u.fuzzy ? e : r),
		(u.sort = i)
	var h = {
			compile: function j(r) {
				return m.template.replace(m.pattern, function (t, e) {
					var n = m.middleware(e, r[e], m.template)
					return void 0 !== n ? n : r[e] || t
				})
			},
			setOptions: function C(t) {
				;(m.pattern = t.pattern || m.pattern),
					(m.template = t.template || m.template),
					"function" == typeof t.middleware && (m.middleware = t.middleware)
			},
		},
		m = {}
	;(m.pattern = /\{(.*?)\}/g),
		(m.template = ""),
		(m.middleware = function () {})
	var v = {
		merge: function L(t, e) {
			var n = {}
			for (var r in t)
				(n[r] = t[r]), "undefined" != typeof e[r] && (n[r] = e[r])
			return n
		},
		isJSON: function M(t) {
			try {
				return !!(t instanceof Object && JSON.parse(JSON.stringify(t)))
			} catch (e) {
				return !1
			}
		},
	}
	!(function (t) {
		var o = {
				searchInput: null,
				resultsContainer: null,
				json: [],
				success: Function.prototype,
				searchResultTemplate:
					'<li><a href="{url}" title="{desc}">{title}</a></li>',
				templateMiddleware: Function.prototype,
				sortMiddleware: function () {
					return 0
				},
				noResultsText: "No results found",
				limit: 10,
				fuzzy: !1,
				exclude: [],
			},
			n = ["searchInput", "resultsContainer", "json"],
			r = (function y(e) {
				if (
					!(function n(t) {
						return (
							!!t &&
							"undefined" != typeof t.required &&
							t.required instanceof Array
						)
					})(e)
				)
					throw new Error("-- OptionsValidator: required options missing")
				if (!(this instanceof y)) return new y(e)
				var r = e.required
				;(this.getRequiredOptions = function () {
					return r
				}),
					(this.validate = function (e) {
						var n = []
						return (
							r.forEach(function (t) {
								"undefined" == typeof e[t] && n.push(t)
							}),
							n
						)
					})
			})({ required: n })
		function i(t) {
			o.success(t),
				l.put(t),
				(function e() {
					o.searchInput.addEventListener("keyup", function (t) {
						;(function e(t) {
							return -1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(t)
						})(t.which) && (u(), c(t.target.value))
					})
				})()
		}
		function u() {
			o.resultsContainer.innerHTML = ""
		}
		function a(t) {
			o.resultsContainer.innerHTML += t
		}
		function c(t) {
			;(function e(t) {
				return t && 0 < t.length
			})(t) &&
				(u(),
				(function i(t, e) {
					var n = t.length
					if (0 === n) return a(o.noResultsText)
					for (var r = 0; r < n; r++) (t[r].query = e), a(h.compile(t[r]))
				})(l.search(t), t))
		}
		function s(t) {
			throw new Error("SimpleJekyllSearch --- " + t)
		}
		t.SimpleJekyllSearch = function (t) {
			return (
				0 < r.validate(t).length &&
					s("You must specify the following required options: " + n),
				(o = v.merge(o, t)),
				h.setOptions({
					template: o.searchResultTemplate,
					middleware: o.templateMiddleware,
				}),
				l.setOptions({
					fuzzy: o.fuzzy,
					limit: o.limit,
					sort: o.sortMiddleware,
				}),
				v.isJSON(o.json)
					? i(o.json)
					: (function e(n) {
							f.load(n, function (t, e) {
								t && s("failed to get JSON (" + n + ")"), i(e)
							})
					  })(o.json),
				{ search: c }
			)
		}
	})(window)
})()
*/

/*!
 * Simple-Jekyll-Search v1.7.2 - Türkçe karakter uyumlu versiyon 230725
 */

!(function () {
	"use strict"

	// 🌟 Türkçe normalize fonksiyonu
	function normalizeTurkish(str) {
		return str
			.toLowerCase()
			.replace(/ç/g, "c")
			.replace(/ğ/g, "g")
			.replace(/ı/g, "i")
			.replace(/ö/g, "o")
			.replace(/ş/g, "s")
			.replace(/ü/g, "u")
	}

	var f = {
		load: function (t, e) {
			var n = window.XMLHttpRequest
				? new XMLHttpRequest()
				: new ActiveXObject("Microsoft.XMLHTTP")
			n.open("GET", t, true)
			n.onreadystatechange = function () {
				if (4 === n.readyState && 200 === n.status) {
					try {
						e(null, JSON.parse(n.responseText))
					} catch (t) {
						e(t, null)
					}
				}
			}
			n.send()
		},
	}

	var fuzzySearch = {
		matches: function (query, text) {
			var eLen = text.length
			var qLen = query.length
			if (eLen < qLen) return false
			if (qLen === eLen) return query === text

			query = normalizeTurkish(query)
			text = normalizeTurkish(text)

			outer: for (var i = 0, j = 0; i < qLen; i++) {
				var ch = query.charCodeAt(i)
				while (j < eLen) {
					if (text.charCodeAt(j++) === ch) continue outer
				}
				return false
			}
			return true
		},
	}

	var strictSearch = {
		matches: function (query, text) {
			if (!query || !text) return false
			query = normalizeTurkish(query.trim().toLowerCase())
			text = normalizeTurkish(text.trim().toLowerCase())

			return query.split(" ").every(function (q) {
				return text.indexOf(q) !== -1
			})
		},
	}

	var dataStore = {
		data: [],
		options: {
			fuzzy: false,
			limit: 10,
			searchStrategy: strictSearch,
			sort: function () {
				return 0
			},
			exclude: [],
		},

		put: function (item) {
			if (typeof item === "object") {
				this.data.push(item)
				return this.data
			}
		},

		clear: function () {
			this.data = []
			return this.data
		},

		search: function (query) {
			if (!query) return []
			var results = []

			for (
				var i = 0;
				i < this.data.length && results.length < this.options.limit;
				i++
			) {
				var match = searchInObject(
					this.data[i],
					query,
					this.options.searchStrategy,
					this.options.exclude
				)
				if (match) results.push(match)
			}

			return results.sort(this.options.sort)
		},

		setOptions: function (opts) {
			this.options = {
				fuzzy: opts.fuzzy || false,
				limit: opts.limit || 10,
				searchStrategy: opts.fuzzy ? fuzzySearch : strictSearch,
				sort:
					opts.sort ||
					function () {
						return 0
					},
				exclude: opts.exclude || [],
			}
		},
	}

	function searchInObject(obj, query, strategy, exclude) {
		for (var key in obj) {
			if (exclude.includes(key)) continue
			var value = String(obj[key])
			if (strategy.matches(query, value)) {
				return obj
			}
		}
		return null
	}

	var templater = {
		template: "",
		pattern: /\{(.*?)\}/g,
		middleware: function () {},

		compile: function (data) {
			return this.template.replace(this.pattern, function (match, key) {
				var value = data[key]
				var processed = templater.middleware(key, value, templater.template)
				return typeof processed !== "undefined" ? processed : value || match
			})
		},

		setOptions: function (opts) {
			this.template = opts.template || this.template
			this.pattern = opts.pattern || this.pattern
			if (typeof opts.middleware === "function") {
				this.middleware = opts.middleware
			}
		},
	}

	var utils = {
		merge: function (base, extra) {
			var merged = {}
			for (var key in base) merged[key] = base[key]
			for (var key in extra) merged[key] = extra[key]
			return merged
		},

		isJSON: function (obj) {
			try {
				return !!(obj instanceof Object && JSON.parse(JSON.stringify(obj)))
			} catch (e) {
				return false
			}
		},
	}

	window.SimpleJekyllSearch = function (opts) {
		var defaults = {
			searchInput: null,
			resultsContainer: null,
			json: [],
			success: function () {},
			searchResultTemplate:
				'<li><a href="{url}" title="{desc}">{title}</a></li>',
			templateMiddleware: function () {},
			sortMiddleware: function () {
				return 0
			},
			noResultsText: "No results found",
			limit: 10,
			fuzzy: false,
			exclude: [],
		}

		var required = ["searchInput", "resultsContainer", "json"]
		required.forEach(function (key) {
			if (!opts[key]) throw new Error("Missing required option: " + key)
		})

		var config = utils.merge(defaults, opts)
		templater.setOptions({
			template: config.searchResultTemplate,
			middleware: config.templateMiddleware,
		})

		dataStore.setOptions({
			fuzzy: config.fuzzy,
			limit: config.limit,
			sort: config.sortMiddleware,
			exclude: config.exclude,
		})

		function handleResults(results, query) {
			config.resultsContainer.innerHTML = ""
			if (results.length === 0) {
				config.resultsContainer.innerHTML = config.noResultsText
				return
			}
			results.forEach(function (result) {
				result.query = query
				config.resultsContainer.innerHTML += templater.compile(result)
			})
		}

		function searchHandler(query) {
			if (query.length === 0) {
				config.resultsContainer.innerHTML = ""
				return
			}
			var results = dataStore.search(query)
			handleResults(results, query)
		}

		config.searchInput.addEventListener("keyup", function (e) {
			if ([13, 16, 20, 37, 38, 39, 40, 91].includes(e.which)) return
			searchHandler(e.target.value)
		})

		if (utils.isJSON(config.json)) {
			config.success(config.json)
			config.json.forEach(dataStore.put, dataStore)
		} else {
			f.load(config.json, function (err, data) {
				if (err) throw new Error("failed to load JSON: " + config.json)
				config.success(data)
				data.forEach(dataStore.put, dataStore)
			})
		}

		return { search: searchHandler }
	}
})()
