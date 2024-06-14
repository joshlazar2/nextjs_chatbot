"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function testPage() {

    return (
        <div className='min-h-screen bg-slate-100'>
            <h1>Hello!</h1>
            <Link href='/'>Back to Chat</Link>
        </div>
    )

}