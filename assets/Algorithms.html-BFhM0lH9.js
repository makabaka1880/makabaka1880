import{_ as e,c as l,g as a,d as n,o as i,r as t}from"./app-XfBMLV3j.js";const r={};function c(o,s){const m=t("FlowChart"),p=t("Vssue");return i(),l("div",null,[s[0]||(s[0]=a('<h1 id="常见算法" tabindex="-1"><a class="header-anchor" href="#常见算法"><span>常见算法</span></a></h1><h2 id="_0x00-引言" tabindex="-1"><a class="header-anchor" href="#_0x00-引言"><span>0x00 引言</span></a></h2><p>在设计程序的时候，我们经常会需要对程序进行优化。</p><p>不然<br> 给自己写的话 电脑可能会骂人 给别人写的话 客户可能会骂人</p><p>那具体怎么优化呢？优化什么呢？优化完有啥好处吗？</p><h2 id="_0x01-啥是算法" tabindex="-1"><a class="header-anchor" href="#_0x01-啥是算法"><span>0x01 啥是算法？</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Wikipedia</p><p>算法(algorithms), 在数学[...]和计算机科学之中, 指一个被定义好的、计算机可施行其指示的有限步骤或次序, 常用于计算、数据处理和自动推理。算法可以使用条件语句通过各种途径转移代码执行(称为自动决策, 并推导出有效的推论), 最终实现自动化。</p></div><p>简单来说，算法就是程序的逻辑、它是一套通用的指令。</p><p>下面展示的就是一个简单的<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>的查找算法。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>算法</strong> 指的是对于大小为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>的输入，需要走<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mi>n</mi><mo separator="true">,</mo><mi>a</mi><mo>∈</mo><mi mathvariant="double-struck">N</mi></mrow><annotation encoding="application/x-tex">an, a\\in\\mathbb N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">an</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">N</span></span></span></span>步的算法。最简单的例子就是接受一个列表的输入并挨个打印的算法。</p></div>',10)),n(m,{id:"flowchart-34",code:"eJx1UE1rwzAMvetX6JgyAts1EJcdeijstJXdvURtTDMpKDZZ//3kJIQWNjDC+nhP7wmC1C7wkKKkaLHCY04q9Ixe1d9AhtrJQOpjEK7w43DCz9d3DFjjM/i2/bcb8AlfoBe5pkeKt7mEZ1Gknr6JIwa2Z3vR539LP4aGkeKf5GzksaMNfJbELTTCpiXHsIwfR5ucOmOcyLwQZimBL3nxHpqOmmvsVKYHEKOrsScuZjm7PVBmtVChUkzKyLCixvSldrTAVOEpl5BUzRPQCjiYqiCFhksXd6U5KZ3dq3TLSUpn/rZmljBbKG40Wm4ES8qSu5vYIg27O+3r9Py/L88oWwbwC95rpHU=",preset:"vue"}),s[1]||(s[1]=a('<p>人话就是在列表里一个一个找 找到了返回 找到列表末尾了还没找到那就报错</p><h2 id="_0x02-时间复杂度与空间复杂度" tabindex="-1"><a class="header-anchor" href="#_0x02-时间复杂度与空间复杂度"><span>0x02 时间复杂度与空间复杂度</span></a></h2><p>在实现某功能时，我们第一个能想到的判断一个算法是否高效的方法就是分别看它的runtime和占用的内存。在理论计算机科学里，有两个与之对应的概念：时间复杂度与空间复杂度。</p><div class="hint-container tip"><p class="hint-container-title">大O表示法</p><p>大<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi></mrow><annotation encoding="application/x-tex">\\mathcal O</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span></span></span>表示法描述函数的渐进上限，考虑最坏情况。例如对于多项式<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span><br><br><strong>正式定义</strong> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∃</mi><mi>c</mi><mo separator="true">,</mo><mi>n</mi><mo separator="true">,</mo><msub><mi>n</mi><mn>0</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">∀</mi><mi>n</mi><mo>&gt;</mo><msub><mi>n</mi><mn>0</mn></msub><mo separator="true">,</mo><mi>c</mi><mo>×</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>≥</mo><mi>T</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>≥</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\exists c, n, n_0, \\forall n &gt; n_0, c\\times f(x) \\geq T(x) \\geq 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">∃</span><span class="mord mathnormal">c</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">c</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>.<br><br><strong>例子</strong> 对于函数<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>4</mn></mrow><annotation encoding="application/x-tex">f(x) = 2x^2 + 3x - 4</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>O</mi><mo stretchy="false">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(x) = O(x^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>.</p></div><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h3><p>我们也可以用大<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi></mrow><annotation encoding="application/x-tex">\\mathcal O</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span></span></span>表示法来分类算法。</p>',6)),n(p)])}const g=e(r,[["render",c],["__file","Algorithms.html.vue"]]),d=JSON.parse('{"path":"/CS/Algorithms.html","title":"常见算法","lang":"zh-CN","frontmatter":{"description":"常见算法 0x00 引言 在设计程序的时候，我们经常会需要对程序进行优化。 不然 给自己写的话 电脑可能会骂人 给别人写的话 客户可能会骂人 那具体怎么优化呢？优化什么呢？优化完有啥好处吗？ 0x01 啥是算法？ Wikipedia 算法(algorithms), 在数学[...]和计算机科学之中, 指一个被定义好的、计算机可施行其指示的有限步骤或次序...","head":[["meta",{"property":"og:url","content":"https://makabaka1880.github.io/CS/Algorithms.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"常见算法"}],["meta",{"property":"og:description","content":"常见算法 0x00 引言 在设计程序的时候，我们经常会需要对程序进行优化。 不然 给自己写的话 电脑可能会骂人 给别人写的话 客户可能会骂人 那具体怎么优化呢？优化什么呢？优化完有啥好处吗？ 0x01 啥是算法？ Wikipedia 算法(algorithms), 在数学[...]和计算机科学之中, 指一个被定义好的、计算机可施行其指示的有限步骤或次序..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T14:06:15.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T14:06:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-22T14:06:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Makabaka1880\\",\\"url\\":\\"https://makabaka1880.xyz\\"}]}"]]},"headers":[{"level":2,"title":"0x00 引言","slug":"_0x00-引言","link":"#_0x00-引言","children":[]},{"level":2,"title":"0x01 啥是算法？","slug":"_0x01-啥是算法","link":"#_0x01-啥是算法","children":[]},{"level":2,"title":"0x02 时间复杂度与空间复杂度","slug":"_0x02-时间复杂度与空间复杂度","link":"#_0x02-时间复杂度与空间复杂度","children":[{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]}]}],"git":{"createdTime":1734876375000,"updatedTime":1734876375000,"contributors":[{"name":"makabaka1880","username":"makabaka1880","email":"makabaka1880@outlook.com","commits":1,"url":"https://github.com/makabaka1880"}]},"readingTime":{"minutes":1.94,"words":581},"filePathRelative":"CS/Algorithms.md","localizedDate":"2024年12月22日","excerpt":"\\n<h2>0x00 引言</h2>\\n<p>在设计程序的时候，我们经常会需要对程序进行优化。</p>\\n<p>不然<br>\\n给自己写的话 电脑可能会骂人 给别人写的话 客户可能会骂人</p>\\n<p>那具体怎么优化呢？优化什么呢？优化完有啥好处吗？</p>\\n<h2>0x01 啥是算法？</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">Wikipedia</p>\\n<p>算法(algorithms), 在数学[...]和计算机科学之中, 指一个被定义好的、计算机可施行其指示的有限步骤或次序, 常用于计算、数据处理和自动推理。算法可以使用条件语句通过各种途径转移代码执行(称为自动决策, 并推导出有效的推论), 最终实现自动化。</p>\\n</div>","autoDesc":true}');export{g as comp,d as data};