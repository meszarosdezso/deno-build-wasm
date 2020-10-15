#!/usr/bin/env -S deno run --allow-read --allow-write --allow-run
import { emptyDir } from 'https://deno.land/std@0.69.0/fs/empty_dir.ts'

async function run(cmd: string) {
  const command = Deno.run({ cmd: cmd.split(' ') })
  if (!(await command.status()).success) return Deno.exit(1)
}

const dir = Deno.cwd() + '/pkg'

if (!Deno.args.length) {
  console.error('Missing argument: name')
  Deno.exit(1)
}

const name = Deno.args[0]
const target = 'wasm32-unknown-unknown'

await emptyDir(dir)
await run(`cargo build --release --target ${target}`)
await run(
  `wasm-bindgen --target deno --out-dir ${dir} target/${target}/release/${name}.wasm`
)
