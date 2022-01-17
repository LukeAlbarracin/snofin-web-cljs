# Snofin

## Full-Stack Clojure Web App with Python Interpreter

My experimention with a frontend written in Clojure integrated with a backend Python interpreter

## Context
I started this while exploring different programming languages and wanted to see if it was possible to run Python in a Clojure full stack application.  I had experimented with Rust macros [here](https://github.com/LukeAlbarracin/recursion-rust) and needed to implement for computer science club as an example since students only knew Python.

GraalVM uses [Truffle](https://www.graalvm.org/reference-manual/java-on-truffle/), a Java library that offers abstract syntax tree (AST) support.

## Technology Details

### Frontend
The frontend is implemented as a web application in Clojure uses Clojurescript to generate Javascript.

### Backend
The backend uses Luminus framework and supports websockets with http-kit library to parse client requests.  A request packages up a Python text expression which is interpreted Truffle on GrallVM to parse and invoke shell commands.

## Related
- [Rust macro exploration of tail-call optimization](https://github.com/LukeAlbarracin/recursion-rust)

## References
- [7 languages in 7 weeks](https://pragprog.com/titles/btlang/seven-languages-in-seven-weeks/)
- [Async programming](https://www.braveclojure.com/core-async/)
- [Web sockets](https://luminusweb.com/docs/websockets.html)
