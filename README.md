🦕

# Build Rust functions for Deno

## Usage:

You must have `wasm-bindgen-cli` installed on your machine. To install run `cargo install wasm-bindgen-cli`.

### Add `wasm-bindgen` to your project

In your `cargo.toml` file, you need to specify the crate type

```toml
[lib]
crate-type = ["cdylib"]
```

under `dependencies` add:

```toml
wasm-bindgen = "0.2"
```

Import `wasm-bindgen` to your rust file:

```rust
use wasm_bindgen::prelude::*;
```

Add the macro to your functions:

```rust
#[wasm_bindgen]
pub fn my_awesome_function() -> String {
    "This is from my awesome function in Rust!"
}
```

### Install the script

```sh
deno install --allow-read --allow-write --allow-run -n deno-build-wasm https://raw.githubusercontent.com/meszarosdezso/deno-build-wasm/master/mod.ts
```

### Build your functions

```sh
deno-build-wasm my-awesome-functions
```

This will generate a `pkg` directory with the neccessary files.

### Use your functions in Deno

```ts
import { my_awesome_function } from './pkg/my-awesome-functions.js'

console.log(my_awesome_function())
// Prints: This is from my awesome function in Rust!
```

&nbsp;

## Huge thanks to [@SrKomodo](https://github.com/SrKomodo) for the original script!

![](https://avatars0.githubusercontent.com/u/22225222?s=60&u=4d5a16389ab072b068a912022c74b784ec264f97&v=4)
