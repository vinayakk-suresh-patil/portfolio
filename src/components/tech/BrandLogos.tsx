'use client'

import React from 'react'

export interface BrandLogoProps {
  name: string
  className?: string
  color?: string
}

export function BrandLogo({ name, className = 'w-6 h-6', color }: BrandLogoProps) {
  const style = color ? { color } : undefined

  switch (name.toLowerCase()) {
    // ----------------------------------------------------
    // AI & REASONING MODELS
    // ----------------------------------------------------
    case 'openai':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.22-9.673a4.475 4.475 0 0 1 2.341-1.975v5.67a.79.79 0 0 0 .392.684l5.843 3.368-2.02 1.168a.075.075 0 0 1-.067 0L4.027 14.75a4.499 4.499 0 0 1-1.647-6.12zM18.73 8.368l-5.843-3.369 2.02-1.168a.074.074 0 0 1 .067 0l4.842 2.793a4.496 4.496 0 0 1-1.086 1.744zm-7.61-3.642a4.476 4.476 0 0 1 2.876 1.04l-.141.08-4.779 2.758a.795.795 0 0 0-.392.682v6.737L6.664 14.89a.071.071 0 0 1-.038-.052V9.255a4.504 4.504 0 0 1 4.494-4.529zm-1.8 7.027l2.846-1.642 2.846 1.642v3.284l-2.846 1.642-2.846-1.642z" />
        </svg>
      )

    case 'anthropic':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
        </svg>
      )

    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
        </svg>
      )

    case 'langgraph':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
          <circle cx="6" cy="7" r="3" fill="currentColor" />
          <circle cx="18" cy="7" r="3" fill="currentColor" />
          <circle cx="12" cy="18" r="3.5" fill="currentColor" />
          <path d="M8.5 7h7M7.5 9.5l3 6M16.5 9.5l-3 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeDasharray="2 2" opacity="0.6" />
        </svg>
      )

    case 'langchain':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
          <rect x="3" y="4" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
          <rect x="14" y="13" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
          <path d="M10 7.5h4a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )

    case 'huggingface':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 2.215.72 4.26 1.94 5.923L2.5 22l4.24-.954A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-3.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-7 7.5a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4c1.1-.8 2.6-1.2 4.1-1.2s3 .4 4.1 1.2a1 1 0 0 1-1.2 1.6c-.8-.6-1.8-.9-2.9-.9s-2.1.3-2.9.9a.99.99 0 0 1-.6.2z" />
        </svg>
      )

    case 'pinecone':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
          <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 2v20M4 6.5l16 9M4 17.5l16-9" stroke="currentColor" strokeWidth="1.25" opacity="0.6" />
        </svg>
      )

    case 'groq':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
          <path d="M9 12h6M12 9l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    // ----------------------------------------------------
    // AUTOMATION & ORCHESTRATION
    // ----------------------------------------------------
    case 'n8n':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
        </svg>
      )

    case 'make':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58 5.8 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z" />
        </svg>
      )

    case 'fastapi':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M13 3L7 13h5l-1 8 7-11h-5l1-7z" fill="currentColor" />
        </svg>
      )

    case 'zapier':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M10.875 0h2.25v8.625h6.188L13.125 24h-2.25v-8.625H4.688L10.875 0z" />
        </svg>
      )

    case 'airtable':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
          <path d="M11.6 3.2L2.5 7.1a.5.5 0 0 0 0 .9l9.1 3.9a1 1 0 0 0 .8 0l9.1-3.9a.5.5 0 0 0 0-.9l-9.1-3.9a1 1 0 0 0-.8 0z" fill="currentColor" />
          <path d="M12.5 13.1v7.6a.5.5 0 0 0 .7.5l8.3-4.5a.5.5 0 0 0 .3-.4V8.8a.5.5 0 0 0-.7-.5l-8.3 4.4a.5.5 0 0 0-.3.4z" fill="currentColor" opacity="0.75" />
          <path d="M11.5 13.1v7.6a.5.5 0 0 1-.7.5L2.5 16.7a.5.5 0 0 1-.3-.4V8.8a.5.5 0 0 1 .7-.5l8.3 4.4a.5.5 0 0 1 .3.4z" fill="currentColor" opacity="0.5" />
        </svg>
      )

    case 'postman':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.93c-3.13-.47-5.5-3.17-5.5-6.43 0-.6.09-1.18.25-1.72L11 13v2.93zm5.72-3.41c-.41 1.05-1.12 1.94-2.01 2.58l-1.71-3.42 2.14-1.28c.67.65 1.22 1.39 1.58 2.12zM12 4.07c2.9 0 5.37 1.89 6.25 4.54l-4.25 2.55V9h-3V6.69c.33-.42.66-.62 1-.62z" />
        </svg>
      )

    case 'webhooks':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
          <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c0-2.21 1.79-4 4-4h7.1a2 2 0 0 0 1.9-1.39A4.002 4.002 0 0 1 22 12c0 2.21-1.79 4-4 4.98z" />
          <circle cx="6" cy="17" r="1.5" fill="currentColor" />
          <circle cx="18" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )

    case 'rest':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8M12 8l4 4-4 4" />
        </svg>
      )

    // ----------------------------------------------------
    // DEVELOPMENT RUNTIMES & FRAMEWORKS
    // ----------------------------------------------------
    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.804v.825H3.857S0 5.787 0 11.921c0 6.135 3.364 5.92 3.364 5.92h2.008v-2.822s-.108-3.363 3.31-3.363h5.688s3.204.053 3.204-3.151V3.15S18.064 0 11.914 0zm-3.14 1.777a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm3.312 22.223c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.804v-.825h8.153s3.857.446 3.857-5.688c0-6.134-3.364-5.92-3.364-5.92h-2.008v2.822s.108 3.363-3.31 3.363H12.79s-3.204-.053-3.204 3.151v5.372s-.49 3.15 5.66 3.15zm3.14-1.777a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
        </svg>
      )

    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM12.44 9.058h7.91v2.18h-2.835v9.112h-2.24V11.238H12.44V9.058zm-7.618 3.593c.883 0 1.68.217 2.392.652.712.434 1.258 1.057 1.637 1.868.379.811.568 1.764.568 2.859 0 1.094-.19 2.048-.569 2.859-.38.811-.925 1.434-1.637 1.868-.712.435-1.51.652-2.392.652-.883 0-1.68-.217-2.392-.652-.712-.434-1.258-1.057-1.637-1.868C.383 20.08.194 19.126.194 18.031c0-1.095.19-2.048.568-2.859.38-.811.925-1.434 1.637-1.868.712-.435 1.51-.652 2.392-.652z" />
        </svg>
      )

    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M90 180c49.706 0 90-40.294 90-90S139.706 0 90 0 0 40.294 0 90s40.294 90 90 90zm37.284-126.852h14.77v73.704h-14.77V53.148zm-27.142 45.485L60.038 53.148H45.268v73.704h14.77V80.373l40.104 46.479h14.77v-7.148l-14.77-21.071z" />
        </svg>
      )

    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" className={className} style={style} aria-hidden="true">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
          <g strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )

    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M12 1.5l10 5.77v11.55L12 24.59l-10-5.77V7.27L12 1.5zm0 2.31L4 8.42v9.24L12 22.3l8-4.64V8.42L12 3.81zm-1.5 5.19h3v1.5h-3V9zm0 3h3v5.5h-3V12z" />
        </svg>
      )

    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.621-1.554-1.288 0-.437.368-.667.897-.667.644 0 1.196.253 1.541.782.345.529.506.713.897.46l.874-.529c-.322-.506-.69-.943-1.081-1.196-.644-.437-1.449-.575-2.277-.575-1.403 0-2.438.782-2.438 2.116 0 1.288.92 1.932 2.392 2.507.828.322 1.472.644 1.472 1.357 0 .575-.529.897-1.173.897-.943 0-1.541-.46-1.932-1.127-.276-.437-.414-.598-.828-.345l-.782.529c.368.644.897 1.173 1.472 1.472.69.368 1.518.483 2.323.483 1.633 0 2.691-.782 2.691-2.185v-.004zm-7.751-5.748h-1.633v6.07c0 1.173-.552 1.564-1.449 1.564-.46 0-.828-.092-1.081-.23v-1.38c.207.092.414.138.644.138.414 0 .598-.23.598-.782v-5.38H9.791v-1.403h4.492v1.403z" />
        </svg>
      )

    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      )

    case 'graphql':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M12 2a1.5 1.5 0 0 0-1.42 1.03l-4.5 11.25a1.5 1.5 0 0 0 .54 1.76l8.5 5.5a1.5 1.5 0 0 0 1.76-.24l6-6a1.5 1.5 0 0 0 .42-1.06V8.5a1.5 1.5 0 0 0-.44-1.06l-6-6A1.5 1.5 0 0 0 12 2zm0 3.12l4.88 4.88H7.12L12 5.12zm-5.72 6.38h11.44l-5.72 7.63-5.72-7.63z" />
        </svg>
      )

    // ----------------------------------------------------
    // INFRASTRUCTURE, STATE & DEPLOYMENT
    // ----------------------------------------------------
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M22.022 10.978c-.283-.497-.735-.918-1.282-1.198l.006-.03c.092-.475.056-.976-.11-1.423a2.915 2.915 0 00-1.157-1.42 4.417 4.417 0 00-2.476-.713 5.467 5.467 0 00-2.146.438c-.378-.453-.873-.805-1.433-1.018a4.912 4.912 0 00-3.46-.062c-.564.208-1.065.556-1.448 1.006-.677-.282-1.427-.384-2.167-.294A4.394 4.394 0 004.5 7.74a3.67 3.67 0 00-.916 2.368c0 .248.03.493.088.732-.516.31-.933.749-1.2 1.265-.36.697-.432 1.503-.204 2.25.228.747.733 1.378 1.41 1.764.218.88.694 1.666 1.365 2.251.67.585 1.5 1.037 2.378 1.294.498.81 1.233 1.455 2.106 1.848.873.393 1.847.518 2.793.357a7.288 7.288 0 002.66-.99c.813.435 1.737.666 2.673.666.904 0 1.796-.217 2.593-.63a5.525 5.525 0 001.996-1.743c.725-.262 1.376-.688 1.888-1.237.512-.55.877-1.22 1.059-1.944.595-.41 1.035-1.01 1.233-1.705.197-.695.129-1.44-.191-2.091z" />
        </svg>
      )

    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.194 13.97a.792.792 0 0 0 .616 1.282H10v8.958a.396.396 0 0 0 .716.233l11.09-13.807a.792.792 0 0 0-.444-1.282z" />
        </svg>
      )

    case 'redis':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M21.96 7.64l-9.5-5.48a.95.95 0 0 0-.92 0l-9.5 5.48a.94.94 0 0 0-.48.82v10.96c0 .34.18.66.48.82l9.5 5.48a.95.95 0 0 0 .92 0l9.5-5.48c.3-.16.48-.48.48-.82V8.46c0-.34-.18-.66-.48-.82zM12 4.16l7.8 4.5-2.92 1.68L9.08 5.84 12 4.16zM4.2 9.48L11 13.41v7.65L4.2 17.13V9.48zm8.8 11.58v-7.65l6.8-3.93v7.65L13 21.06z" />
        </svg>
      )

    case 'docker':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm21.605 1.554c-.31-.205-1.423-.32-2.33-.217-.183-.687-.638-1.28-1.267-1.637l-.547-.31-.382.49c-.672.862-.977 1.954-.977 3.018 0 .543.084 1.08.252 1.59-.283.167-.783.39-1.29.5-1.34.29-3.414.33-4.78.33H.39a.39.39 0 00-.39.424c.433 3.823 3.037 7.07 6.81 8.163 1.91.554 4.02.6 6.012.13 4.298-1.015 7.643-4.49 8.277-8.887.89-.133 2.12-.59 2.766-1.577.204-.313.238-.673.135-1.027z" />
        </svg>
      )

    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M21.707 10.293L13.707 2.293a1 1 0 0 0-1.414 0L9.414 5.172l2.672 2.672a2.5 2.5 0 0 1 3.125 3.125l2.672 2.672a1 1 0 0 0 1.414 0l2.414-2.414a1 1 0 0 0 0-1.414zM8 7.414L2.293 13.121a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414 0l5.707-5.707-2.672-2.672a2.5 2.5 0 0 1-3.125-3.125L8.946 8.358A1 1 0 0 0 8 7.414zM12 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      )

    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>
      )

    case 'linux':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M12.001 0c-2.76 0-5 2.24-5 5v3.29c-1.8.84-3 2.65-3 4.71 0 1.63.74 3.09 1.9 4.09-.58 1.46-.9 3.07-.9 4.91h14c0-1.84-.32-3.45-.9-4.91 1.16-1 1.9-2.46 1.9-4.09 0-2.06-1.2-3.87-3-4.71V5c0-2.76-2.24-5-5-5zm-1.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2.5 3h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1z" />
        </svg>
      )

    case 'cloudflare':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
          <path d="M19.19 11.23A6.5 6.5 0 0 0 6.6 9.4 4.5 4.5 0 0 0 3 13.82c0 .24.02.48.06.71A4.25 4.25 0 0 0 5.25 18h13.5a3.75 3.75 0 0 0 .44-7.47v-.3z" />
        </svg>
      )

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      )
  }
}
