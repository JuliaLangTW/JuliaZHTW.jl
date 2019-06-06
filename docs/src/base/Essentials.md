
# 基本功能（Essentials）  

## 介紹   

Julia 的標準函式庫包含了一系列的方法並且其之巨集（Macro）十分適合運用於數據運算。除此之外，它也如同其他常見的程式語言一樣用途廣泛。隨著越來越多的可使用的套件，可用的額外函式也隨之增加。  
以下將按照函式的使用時機為各別主題，列出標準函式庫中的函式：  
  
附註：  
 * 除了內建模組（例如：`Pkg`，`Collections`，`Test`和`Profile`）中的函式之外，此處列載的所有函式都可直接在程式中使用。  
 * 若要使用內建模組之函式，需使用 `import Module` 來匯入模組，並且使用 `Module.fn(x)` 來呼叫該模組中的函式。  
 * 又或者，可藉由使用 `using Module`，將會匯入所有 `Module` 中的函式到當前的命名空間。
 * 依據慣例，部分函式命名以感嘆號（`！`）做結尾會變更它們的參數。一些函數保有變更的（例如：`sort！`），也有未變更的（例如：`sort`）版本。  
 
## 隨時可使用之函式

```@docs
Base.exit
Base.quit
Base.atexit
Base.atreplinit
Base.isinteractive
Base.whos
Base.summarysize
Base.edit(::AbstractString, ::Integer)
Base.edit(::Any)
Base.@edit
Base.less(::AbstractString)
Base.less(::Any)
Base.@less
Base.clipboard(::Any)
Base.clipboard()
Base.reload
Base.require
Base.compilecache
Base.__precompile__
Base.include
Base.include_string
Base.include_dependency
Base.Docs.apropos
Base.which(::Any, ::Any)
Base.which(::Symbol)
Base.@which
Base.methods
Base.methodswith
Base.@show
Base.versioninfo
Base.workspace
ans
```  

## 物件

```@docs
Core.:(===)
Core.isa
Base.isequal(::Any, ::Any)
Base.isequal(::Nullable, ::Nullable)
Base.isless
Base.isless(::Nullable, ::Nullable)
Base.ifelse
Base.lexcmp
Base.lexless
Core.typeof
Core.tuple
Base.ntuple
Base.object_id
Base.hash
Base.finalizer
Base.finalize
Base.copy
Base.deepcopy
Core.isdefined
Base.convert
Base.promote
Base.oftype
Base.widen
Base.identity
```

## 型別

```@docs
Base.supertype
Core.issubtype
Base.:(<:)
Base.:(>:)
Base.subtypes
Base.typemin
Base.typemax
Base.realmin
Base.realmax
Base.maxintfloat
Base.sizeof(::Type)
Base.eps(::Type{<:AbstractFloat})
Base.eps(::AbstractFloat)
Base.promote_type
Base.promote_rule
Core.getfield
Core.setfield!
Base.fieldoffset
Core.fieldtype
Base.isimmutable
Base.isbits
Base.isleaftype
Base.typejoin
Base.typeintersect
Base.Val
Base.Enums.@enum
Base.instances
```

## 一般函式

```@docs
Core.Function
Base.method_exists
Core.applicable
Core.invoke
Base.invokelatest
Base.:(|>)
Base.:(∘)
```

## 語法

```@docs
Core.eval
Base.@eval
Base.evalfile
Base.esc
Base.@inbounds
Base.@inline
Base.@noinline
Base.gensym
Base.@gensym
Base.@polly
Base.parse(::Any, ::Any)
Base.parse(::Any)
```

## Nullables

```@docs
Base.Nullable
Base.get(::Nullable, ::Any)
Base.isnull
Base.unsafe_get
```

## 系統

```@docs
Base.run
Base.spawn
Base.DevNull
Base.success
Base.process_running
Base.process_exited
Base.kill(::Base.Process, ::Integer)
Base.Sys.set_process_title
Base.Sys.get_process_title
Base.readandwrite
Base.ignorestatus
Base.detach
Base.Cmd
Base.setenv
Base.withenv
Base.pipeline(::Any, ::Any, ::Any, ::Any...)
Base.pipeline(::Base.AbstractCmd)
Base.Libc.gethostname
Base.getipaddr
Base.Libc.getpid
Base.Libc.time()
Base.time_ns
Base.tic
Base.toc
Base.toq
Base.@time
Base.@timev
Base.@timed
Base.@elapsed
Base.@allocated
Base.EnvHash
Base.ENV
Base.is_unix
Base.is_apple
Base.is_linux
Base.is_bsd
Base.is_windows
Base.Sys.windows_version
Base.@static
```

## 錯誤

```@docs
Base.error
Core.throw
Base.rethrow
Base.backtrace
Base.catch_backtrace
Base.assert
Base.@assert
Base.ArgumentError
Base.AssertionError
Core.BoundsError
Base.DimensionMismatch
Core.DivideError
Core.DomainError
Base.EOFError
Core.ErrorException
Core.InexactError
Core.InterruptException
Base.KeyError
Base.LoadError
Base.MethodError
Base.NullException
Core.OutOfMemoryError
Core.ReadOnlyMemoryError
Core.OverflowError
Base.ParseError
Base.ProcessExitedException
Core.StackOverflowError
Base.SystemError
Core.TypeError
Core.UndefRefError
Core.UndefVarError
Base.InitError
Base.retry
Base.ExponentialBackOff
```

## 事件

```@docs
Base.Timer(::Function, ::Real, ::Real)
Base.Timer
Base.AsyncCondition
Base.AsyncCondition(::Function)
```

## 反射（Reflection）

```@docs
Base.module_name
Base.module_parent
Base.current_module
Base.fullname
Base.names
Core.nfields
Base.fieldnames
Base.fieldname
Base.datatype_module
Base.datatype_name
Base.isconst
Base.function_name
Base.function_module(::Function)
Base.function_module(::Any, ::Any)
Base.functionloc(::Any, ::Any)
Base.functionloc(::Method)
Base.@functionloc
```

## 內部功能（Internals）

```@docs
Base.gc
Base.gc_enable
Base.macroexpand
Base.@macroexpand
Base.expand
Base.code_lowered
Base.@code_lowered
Base.code_typed
Base.@code_typed
Base.code_warntype
Base.@code_warntype
Base.code_llvm
Base.@code_llvm
Base.code_native
Base.@code_native
Base.precompile
```

