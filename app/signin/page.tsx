"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Nav from "@/components/Nav";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function onSubmit() {
    setMsg("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/"
    });
    if ((res as any)?.error) setMsg("Login failed");
  }

  return (
    <>
      <Nav />
      <div className="container">
        <div className="card" style={{padding:24}}>
          <h1 style={{marginTop:0}}>Sign in</h1>
          <p className="muted">Use ADMIN_EMAIL + ADMIN_PASSWORD from your .env.</p>

          <div style={{display:"grid", gap:12, maxWidth:520}}>
            <input className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className="input" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className="btn btnPrimary" onClick={onSubmit}>Sign in</button>
            {msg ? <div className="muted">{msg}</div> : null}
          </div>
        </div>
      </div>
    </>
  );
}
