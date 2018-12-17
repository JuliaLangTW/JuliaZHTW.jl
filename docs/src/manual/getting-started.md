# 入門（Getting Started）

安裝 Julia，不管是安裝事先編譯好的執行檔，還是從原始碼開始編譯都非常簡單。按照這裡的[說明](http://julialang.org/downloads/)來下載安裝即可。

使用互動式介面 (或稱為repl) 是學習 Julia 最簡單的方式，可以直接雙擊 Julia 執行檔或是從命令列執行`julia`即可：

```
$ julia
               _
   _       _ _(_)_     |  A fresh approach to technical computing
  (_)     | (_) (_)    |  Documentation: https://docs.julialang.org
   _ _   _| |_  __ _   |  Type "?help" for help.
  | | | | | | |/ _` |  |
  | | |_| | | | (_| |  |  Version 0.5.0-dev+2440 (2016-02-01 02:22 UTC)
 _/ |\__'_|_|_|\__'_|  |  Commit 2bb94d6 (11 days old master)
|__/                   |  x86_64-apple-darwin13.1.0

julia> 1 + 2
3

julia> ans
3
```

按下`^D`--`control`加上`D`鍵或是輸入`quit()`即可離開互動式介面。進入`julia`互動式介面時，將會看到印有 Julia 圖樣的橫幅標題與命令提示字元供使用者輸入指令。一旦使用者輸入一組完整的指令，例如`1 + 2`，並按下輸入鍵 (enter/return)，Julia 的互動介面將會對輸入的指令取值並在螢幕上印出最後的結果。若輸入的指令以分號 (`;`) 結尾，互動介面將不會印出最後的運算結果。`ans` 變數會自動與上一次運算的結果 (無論是否印出) 綁定。需要注意的是，`ans`變數只在互動介面下會被綁定，在其他 Julia 的執行環境下並不會有這樣的行為。

如需在互動介面下對寫在其他 Julia 腳本 (script) 的指令取值 (例如`file.jl`)，可以使用 `include("file.jl")` 指令即可。


如需直接執行 Julia 腳本的指令，可以把腳本檔案名稱當做`julia`執行檔的第一個變數：

```
$ julia script.jl arg1 arg2...
```

如同上述範例所示，緊接於`script.jl`腳本後的變數會被當作命令列變數被綁定於`ARGS`這個`julia`的全域變數中。腳本檔案的名稱則是被綁定於`PROGRAM_FILE`這個全域變數中。另外，當指令藉由`-e`傳入`julia`執行檔時，`ARGS`全域變數仍會被綁定，但`PROGRAM_FILE`將會是個空字串。舉例來說，如果希望印出配傳入的所有變數，你可以執行下列命令：

```
$ julia -e 'println(PROGRAM_FILE); for x in ARGS; println(x); end' foo bar

foo
bar
```

或者是將指令寫入一個檔案中並執行：

```
$ echo 'println(PROGRAM_FILE); for x in ARGS; println(x); end' > script.jl
$ julia script.jl foo bar
script.jl
foo
bar
```

`--`分隔符號可用來分別指定用於 Julia 命令列的變數與用於腳本的變數：

```
$ julia --color=yes -O -- foo.jl arg1 arg2..
```

Julia 也可以使用`-p`或`--machinefile`命令列選項執行平行化模式。使用`-p n`將會開啟額外`n`個工作行程，而當使用`--machinefile file`時將會根據每行`file`中定義節點位址上開啟工作行程。被定義於`file`中的機器必須要可以無密碼 (passwordless) 的方式藉由`ssh`登入，且所有節點的 Julia 命令列必須被安裝在與主機 (host) 相同的系統路徑上。`file`中定義的節點必須遵循以下格式`[count*][user@]host[:port] [bind_addr[:port]]`。`user`預設為當下使用者名稱，`port`預設為標準 `ssh` 端口。`count`為節點上欲開啟的工作行程數量，預設為 1 。`bind_addr[:port]`為可選參數，可用來指定其他工作行程用來連接節點所用的位址與端口。

你可以將預設想執行的指令寫於 `~/.juliarc.jl`，Julia 會於開啟時執行其中所有指令：

```
$ echo 'println("Greetings! 你好! 안녕하세요?")' > ~/.juliarc.jl
$ julia
Greetings! 你好! 안녕하세요?

...
```

Julia 提供多種方式執行 Julia 程式碼與多種可選選項，類似於`perl`與`ruby`：

```
$ julia -h
julia [switches] -- [programfile] [args...]
 -v, --version             Display version information
 -h, --help                Print this message

 -J, --sysimage <file>     Start up with the given system image file
 --precompiled={yes|no}    Use precompiled code from system image if available
 --compilecache={yes|no}   Enable/disable incremental precompilation of modules
 -H, --home <dir>          Set location of `julia` executable
 --startup-file={yes|no}   Load ~/.juliarc.jl
 --handle-signals={yes|no} Enable or disable Julia's default signal handlers

 -e, --eval <expr>         Evaluate <expr>
 -E, --print <expr>        Evaluate and show <expr>
 -L, --load <file>         Load <file> immediately on all processors

 -p, --procs {N|auto}      Integer value N launches N additional local worker processes
                           "auto" launches as many workers as the number of local cores
 --machinefile <file>      Run processes on hosts listed in <file>

 -i                        Interactive mode; REPL runs and isinteractive() is true
 -q, --quiet               Quiet startup (no banner)
 --color={yes|no}          Enable or disable color text
 --history-file={yes|no}   Load or save history

 --compile={yes|no|all|min}Enable or disable JIT compiler, or request exhaustive compilation
 -C, --cpu-target <target> Limit usage of cpu features up to <target>
 -O, --optimize={0,1,2,3}  Set the optimization level (default is 2 if unspecified or 3 if specified as -O)
 -g, -g <level>            Enable / Set the level of debug info generation (default is 1 if unspecified or 2 if specified as -g)
 --inline={yes|no}         Control whether inlining is permitted (overrides functions declared as @inline)
 --check-bounds={yes|no}   Emit bounds checks always or never (ignoring declarations)
 --math-mode={ieee,fast}   Disallow or enable unsafe floating point optimizations (overrides @fastmath declaration)

 --depwarn={yes|no|error}  Enable or disable syntax and method deprecation warnings ("error" turns warnings into errors)

 --output-o name           Generate an object file (including system image data)
 --output-ji name          Generate a system image data file (.ji)
 --output-bc name          Generate LLVM bitcode (.bc)
 --output-incremental=no   Generate an incremental output file (rather than complete)

 --code-coverage={none|user|all}, --code-coverage
                           Count executions of source lines (omitting setting is equivalent to "user")
 --track-allocation={none|user|all}, --track-allocation
                           Count bytes allocated by each source line
```

## 相關資源

除了這份手冊之外，Julia 的新使用者也可以參考以下相關資源來入手 Julia：

  * [Julia and IJulia cheatsheet](http://math.mit.edu/~stevenj/Julia-cheatsheet.pdf)
  * [Learn Julia in a few minutes](https://learnxinyminutes.com/docs/julia/)
  * [Learn Julia the Hard Way](https://github.com/chrisvoncsefalvay/learn-julia-the-hard-way)
  * [Julia by Example](http://samuelcolvin.github.io/JuliaByExample/)
  * [Hands-on Julia](https://github.com/dpsanders/hands_on_julia)
  * [Tutorial for Homer Reid's numerical analysis class](http://homerreid.dyndns.org/teaching/18.330/JuliaProgramming.shtml)
  * [An introductory presentation](https://raw.githubusercontent.com/ViralBShah/julia-presentations/master/Fifth-Elephant-2013/Fifth-Elephant-2013.pdf)
  * [Videos from the Julia tutorial at MIT](https://julialang.org/blog/2013/03/julia-tutorial-MIT)
  * [YouTube videos from the JuliaCons](https://www.youtube.com/user/JuliaLanguage/playlists)

[文件原文](https://docs.julialang.org/en/v0.6/manual/getting-started/)
