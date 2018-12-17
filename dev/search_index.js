var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "首頁",
    "title": "首頁",
    "category": "page",
    "text": ""
},

{
    "location": "#Julia-Taiwan-中文文件-1",
    "page": "首頁",
    "title": "Julia Taiwan 中文文件",
    "category": "section",
    "text": "歡迎來到 Julia Taiwan 中文文件，當前翻譯對應版本為 v0.6。"
},

{
    "location": "#概論-(Introduction)-1",
    "page": "首頁",
    "title": "概論 (Introduction)",
    "category": "section",
    "text": "科學計算一般來說需要極高的效能，然而領域專家往往使用較緩慢的動態程式語言進行開發。我們相信選擇動態語言是基於很多應用上的好理由，所以我們也不希望他們消失。幸運的是，現代語言設計與編譯器技術能讓解決大部分效能取捨的問題，提供單一且具足夠生產力的環境讓大家打造原型，並且可以有效率的交付效能吃重的應用程式。Julia 程式語言足以擔綱這個角色：它是一個具有彈性的動態語言，適合科學與數值運算，同時在效能可以與傳統靜態型別語言媲美。Julia 的編譯器與 Python 或 R 的直譯器不同，你起初會發現 Julia 的效能是違反直覺的。如果你發現某些東西慢了，在嘗試其他方法之前，我們強烈建議你閱讀 效能建議 (Performance Tips) 章節。一旦你了解 Julia 的運作方式之後，你可以很簡單地寫出接近 C 語言效能的程式。Julia 的特色有選擇性型別宣告 (optional typing)、多重分派 (multiple dispatch,) 跟絕佳的效能，藉由型別推斷 (type inference) 以及 just-in-time (JIT) compilation 達成，語言核心以 LLVM 實作。它是一個多典範（multi-paradigm) 語言，結合了命令式 (imperative)、函數式 (functional) 跟物件導向 (object-oriented programming)。Julia 為高階數值運算提供了易用性與表達性語法，就像 R、MATLAB 跟 Python 語言一般，除此之外也可以用於一般程式設計。為了達成這些，Julia 承襲了數學程式語言，也向主流程式語言借鏡了不少，其中包含 Lisp、 Perl、Python、Lua、跟 Ruby。Julia，相較於典型動態語言，最亮眼的部份包含：小巧的語言核心；標準程式庫本身即是由 Julia 自身撰寫而成，包含原始操作 (primitive operations)，像是整數算術運算\n擁有豐富型別用以建構及敘述物件，也可以做選擇性型別宣告\n定義函式行為的能力，藉由多重分派，作用於不同的參數型別組合\n針對不同的參數型別組合自動產生有效率、特化的程式碼\n絕佳效能，逼近靜態編譯語言，像 C動態語言使用起來有時候常會以為它是「無型別」，但事實上絕對不是這樣的：每個物件，無論是原始型別或是使用者定義的，都有一個型別。在大多數動態語言中都缺乏型別宣告，然而，這意味著我們無法告訴編譯器關於值的型別，也時常無法明確地討論型別(and often cannot explicitly talk about types at all)。另一方面，在靜態語言，我們可以，通常也是必須，標記型別，型別只存在於 compile time 而且在 run-time 不能被操作或是表示。在 Julia 中，型別本身就是在 run-time 的物件，而且可以用來傳達資訊給編譯器。一般的程式設計師不需要特別去使用型別或多重分派，他們是 Julia 的共同核心功能：函式被定義在不同參數型別的組合上，而且會被發派給最相符的函式定義上計算。這個模型很適合數學計算，相較於讓第一個參數「擁有」一個運算，例同傳統物件導向的作法，反而是不自然的。運算子就只是有特別符號的函式-你可以定義新的方法到+函式上，讓加法延伸到使用者定義的型別上。現存的程式碼仍然可以無縫地銜接到新的資料型別上。一方面得益於 run-time 的型別推斷 (augmented by optional type annotations)，以及起初就聚焦於運算效能，Julia 的計算效率超越其他動態語言，甚至是其他靜態編譯語言。對於一個大型數值問題，速度一直以來都是，也一直會是，也可能永遠是最重要的：這幾十年來，需要處理的資料量已經輕易的趕上了摩爾定律 (Moore’s Law)。Julia 的目標是成為前所未有，集易用、強大與效率於一身的語言。除了上述以外，一些Julia的優勢包含:免費而且開源 (MIT licensed)\n使用者定義型別與內建型別一樣小巧快速\n不需要為了效能向量化程式碼；去向量化的程式碼就是快\n特別適合平行化與分散式運算\n輕量的「綠色」執行緒 (coroutines)\n不突兀而強大的型別系統\n優雅而可擴充的轉型與向上轉型\n支援 Unicode，包含但不限於 UTF-8\n直接呼叫 C 函式 (不需要包裝或是使用特殊 APIs)\n強大的shell-like行程管理能力\nLisp般的macros與其他metaprogramming的能力文件原文"
},

{
    "location": "mannual/getting-started/#",
    "page": "入門 (Getting Started)",
    "title": "入門 (Getting Started)",
    "category": "page",
    "text": ""
},

{
    "location": "mannual/getting-started/#入門（Getting-Started）-1",
    "page": "入門 (Getting Started)",
    "title": "入門（Getting Started）",
    "category": "section",
    "text": "安裝 Julia，不管是安裝事先編譯好的執行檔，還是從原始碼開始編譯都非常簡單。按照這裡的說明來下載安裝即可。使用互動式介面 (或稱為repl) 是學習 Julia 最簡單的方式，可以直接雙擊 Julia 執行檔或是從命令列執行julia即可：$ julia\n               _\n   _       _ _(_)_     |  A fresh approach to technical computing\n  (_)     | (_) (_)    |  Documentation: https://docs.julialang.org\n   _ _   _| |_  __ _   |  Type \"?help\" for help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 0.5.0-dev+2440 (2016-02-01 02:22 UTC)\n _/ |\\__\'_|_|_|\\__\'_|  |  Commit 2bb94d6 (11 days old master)\n|__/                   |  x86_64-apple-darwin13.1.0\n\njulia> 1 + 2\n3\n\njulia> ans\n3按下^D–control加上D鍵或是輸入quit()即可離開互動式介面。進入julia互動式介面時，將會看到印有 Julia 圖樣的橫幅標題與命令提示字元供使用者輸入指令。一旦使用者輸入一組完整的指令，例如1 + 2，並按下輸入鍵 (enter/return)，Julia 的互動介面將會對輸入的指令取值並在螢幕上印出最後的結果。若輸入的指令以分號 (;) 結尾，互動介面將不會印出最後的運算結果。ans 變數會自動與上一次運算的結果 (無論是否印出) 綁定。需要注意的是，ans變數只在互動介面下會被綁定，在其他 Julia 的執行環境下並不會有這樣的行為。如需在互動介面下對寫在其他 Julia 腳本 (script) 的指令取值 (例如file.jl)，可以使用 include(\"file.jl\") 指令即可。如需直接執行 Julia 腳本的指令，可以把腳本檔案名稱當做julia執行檔的第一個變數：$ julia script.jl arg1 arg2...如同上述範例所示，緊接於script.jl腳本後的變數會被當作命令列變數被綁定於ARGS這個julia的全域變數中。腳本檔案的名稱則是被綁定於PROGRAM_FILE這個全域變數中。另外，當指令藉由-e傳入julia執行檔時，ARGS全域變數仍會被綁定，但PROGRAM_FILE將會是個空字串。舉例來說，如果希望印出配傳入的所有變數，你可以執行下列命令：$ julia -e \'println(PROGRAM_FILE); for x in ARGS; println(x); end\' foo bar\n\nfoo\nbar或者是將指令寫入一個檔案中並執行：$ echo \'println(PROGRAM_FILE); for x in ARGS; println(x); end\' > script.jl\n$ julia script.jl foo bar\nscript.jl\nfoo\nbar--分隔符號可用來分別指定用於 Julia 命令列的變數與用於腳本的變數：$ julia --color=yes -O -- foo.jl arg1 arg2..Julia 也可以使用-p或--machinefile命令列選項執行平行化模式。使用-p n將會開啟額外n個工作行程，而當使用--machinefile file時將會根據每行file中定義節點位址上開啟工作行程。被定義於file中的機器必須要可以無密碼 (passwordless) 的方式藉由ssh登入，且所有節點的 Julia 命令列必須被安裝在與主機 (host) 相同的系統路徑上。file中定義的節點必須遵循以下格式[count*][user@]host[:port] [bind_addr[:port]]。user預設為當下使用者名稱，port預設為標準 ssh 端口。count為節點上欲開啟的工作行程數量，預設為 1 。bind_addr[:port]為可選參數，可用來指定其他工作行程用來連接節點所用的位址與端口。你可以將預設想執行的指令寫於 ~/.juliarc.jl，Julia 會於開啟時執行其中所有指令：$ echo \'println(\"Greetings! 你好! 안녕하세요?\")\' > ~/.juliarc.jl\n$ julia\nGreetings! 你好! 안녕하세요?\n\n...Julia 提供多種方式執行 Julia 程式碼與多種可選選項，類似於perl與ruby：$ julia -h\njulia [switches] -- [programfile] [args...]\n -v, --version             Display version information\n -h, --help                Print this message\n\n -J, --sysimage <file>     Start up with the given system image file\n --precompiled={yes|no}    Use precompiled code from system image if available\n --compilecache={yes|no}   Enable/disable incremental precompilation of modules\n -H, --home <dir>          Set location of `julia` executable\n --startup-file={yes|no}   Load ~/.juliarc.jl\n --handle-signals={yes|no} Enable or disable Julia\'s default signal handlers\n\n -e, --eval <expr>         Evaluate <expr>\n -E, --print <expr>        Evaluate and show <expr>\n -L, --load <file>         Load <file> immediately on all processors\n\n -p, --procs {N|auto}      Integer value N launches N additional local worker processes\n                           \"auto\" launches as many workers as the number of local cores\n --machinefile <file>      Run processes on hosts listed in <file>\n\n -i                        Interactive mode; REPL runs and isinteractive() is true\n -q, --quiet               Quiet startup (no banner)\n --color={yes|no}          Enable or disable color text\n --history-file={yes|no}   Load or save history\n\n --compile={yes|no|all|min}Enable or disable JIT compiler, or request exhaustive compilation\n -C, --cpu-target <target> Limit usage of cpu features up to <target>\n -O, --optimize={0,1,2,3}  Set the optimization level (default is 2 if unspecified or 3 if specified as -O)\n -g, -g <level>            Enable / Set the level of debug info generation (default is 1 if unspecified or 2 if specified as -g)\n --inline={yes|no}         Control whether inlining is permitted (overrides functions declared as @inline)\n --check-bounds={yes|no}   Emit bounds checks always or never (ignoring declarations)\n --math-mode={ieee,fast}   Disallow or enable unsafe floating point optimizations (overrides @fastmath declaration)\n\n --depwarn={yes|no|error}  Enable or disable syntax and method deprecation warnings (\"error\" turns warnings into errors)\n\n --output-o name           Generate an object file (including system image data)\n --output-ji name          Generate a system image data file (.ji)\n --output-bc name          Generate LLVM bitcode (.bc)\n --output-incremental=no   Generate an incremental output file (rather than complete)\n\n --code-coverage={none|user|all}, --code-coverage\n                           Count executions of source lines (omitting setting is equivalent to \"user\")\n --track-allocation={none|user|all}, --track-allocation\n                           Count bytes allocated by each source line"
},

{
    "location": "mannual/getting-started/#相關資源-1",
    "page": "入門 (Getting Started)",
    "title": "相關資源",
    "category": "section",
    "text": "除了這份手冊之外，Julia 的新使用者也可以參考以下相關資源來入手 Julia：Julia and IJulia cheatsheet\nLearn Julia in a few minutes\nLearn Julia the Hard Way\nJulia by Example\nHands-on Julia\nTutorial for Homer Reid\'s numerical analysis class\nAn introductory presentation\nVideos from the Julia tutorial at MIT\nYouTube videos from the JuliaCons"
},

{
    "location": "mannual/variables/#",
    "page": "變數 (Variables)",
    "title": "變數 (Variables)",
    "category": "page",
    "text": ""
},

{
    "location": "mannual/variables/#變數-1",
    "page": "變數 (Variables)",
    "title": "變數",
    "category": "section",
    "text": "一個變數，在 Julia 中，是一個名稱被關聯 (或是綁定) 到一個值。當你想要將值 (你可能是從一些數學運算得到的) 儲存起來以便以後使用，這會很有用。舉例來說：# 指定 10 的值給變數 x\njulia> x = 10\n10\n\n# 對 x 的值做一些數學運算\njulia> x + 1\n11\n\n# 重新指定 x 的值\njulia> x = 1 + 1\n2\n\n# 你可以指定其他型別的值，像是一個字串\njulia> x = \"Hello World!\"\n\"Hello World!\"Julia 提供了極有彈性的變數命名系統。 變數名稱是有區分大小寫的 (case-sensitive)，而且沒有語意上的意義（no semantic meaning)。也就是說，語言不會因為命名不同，而讓變數有所差別。julia> x = 1.0\n1.0\n\njulia> y = -3\n-3\n\njulia> Z = \"My string\"\n\"My string\"\n\njulia> customary_phrase = \"Hello world!\"\n\"Hello world!\"\n\njulia> UniversalDeclarationOfHumanRightsStart = \"人人生而自由，在尊严和权利上一律平等。\"\n\"人人生而自由，在尊严和权利上一律平等。\"允許以 Unicode 命名（使用 UTF-8）：julia> δ = 0.00001\n1.0e-5\n\njulia> 안녕하세요 = \"Hello\"\n\"Hello\"在 Julia REPL 與一些其他的編輯環境中，你可以鍵入很多 Unicode 的數學符號，藉由鍵入反斜線的 LaTeX 符號，最後加上 tab。舉例來說，變數名稱δ可以藉由鍵入\\delta-tab，或是甚至α̂₂可以鍵入\\alpha-tab-\\hat-tab-\\_2-tab。如果有需要的話，Julia 也允許你重新定義內建的常數跟函式：julia> pi\nπ = 3.1415926535897...\n\njulia> pi = 3\nWARNING: imported binding for pi overwritten in module Main\n3\n\njulia> pi\n3\n\njulia> sqrt(100)\n10.0\n\njulia> sqrt = 4\nWARNING: imported binding for sqrt overwritten in module Main\n4然而，這顯然是不建議這麼做，以避免潛在的衝突。"
},

{
    "location": "mannual/variables/#合法變數名稱-1",
    "page": "變數 (Variables)",
    "title": "合法變數名稱",
    "category": "section",
    "text": "變數名稱必須以英文字母開頭 (A-Z 或 a-z)、底線 (_) 或是碼位大於 00A0 的 Unicode 子字符集組成。具體來說，Unicode 字符類別 Lu/Ll/Lt/Lm/Lo/Nl (英文字母)、Sc/So (貨幣與其他符號) 和一些其他類字母字符 (例如一部分 Sm 類別中的數學字符) 都是可以使用的。後續字符則可額外使用 ! 與數字 (0-9 或 Nd/No 字符類別中的符號)，再加上其他 Unicode 碼位：變音字符 (diacritics) 與其他修飾字符 (modifying marks，字符類別 Mn/Mc/Me/Sk)、部分標點連結字符 (puctuation connectors，字符類別 Pc)、primes 字符與少部份其他字符。諸如+等運算符也可以當作合法的名稱，只是解析方式與一般變數不同。在某些情境下，運算符可以被當作一般變數使用；舉例來說，(+)代表著加法函數，也可以使用 (+) = f 覆寫它。大部分 Unicode 中綴 (infix) 運算符 (字符類別 Sm)，例如 ⊕，也會被解析為中綴運算符且可用於使用者自定義的方法 (例如你可以使用const ⊕ = kron將 ⊕ 定義成中綴 Kronecker 積運算符)。唯一被明確地禁止使用的名稱為內建陳述句：julia> else = false\nERROR: syntax: unexpected \"else\"\n...\n\njulia> try = \"No\"\nERROR: syntax: unexpected \"=\"\n...部分 Unicode 字符被用來當作變數識別符使用時，將會被視為等價符號。以不同方式輸入的 Unicode 組合字符 (例如：重音\') 會是等價的 (具體來說，Julia 的識別符會被 NFC-正規化，NFC-Normalized)。Uncode 字元 ɛ (U+025B：拉丁文中的小寫 e) 與 µ (U+00B5：micro sign) 與其相對應的希臘字母將會被視為等價，因為在某些輸入法下，前者可以很容易地輸入。"
},

{
    "location": "mannual/variables/#慣用風格-1",
    "page": "變數 (Variables)",
    "title": "慣用風格",
    "category": "section",
    "text": "雖然 Julia 並未強加限制在可使用名稱上，但遵循下列慣例對開發上會很有幫助：變數名稱使用小寫符號。\n可用底線 (_) 分隔名稱，但如非必要並不鼓勵使用。\n類別與模組名稱使用大寫開頭，並使用駝峰式命名 (camel case) 取代底線。\n函數與巨集 (macro) 以小寫符號命名，不使用底線。\n以!結尾的名稱為會複寫其變數的函數命名。因為這類函數再回傳後將會改變其變數的值，而不是單純回傳一個值，所以這類函數又常被稱作 \"mutating\" 或 \"in-place\" 函數。如需要更多慣用風格的資訊，請參閱程式風格指引一節。"
},

]}
