import React from 'react'
import { Metadata } from "next";
import MinimalHome from '@/components/Home/MinimalHome';

export const metadata: Metadata = {
  title: "Shield Our Elders",
  description: "A repeated-site elder scam defense program for Brevard County seniors, caregivers, libraries, and senior-serving sites.",
};

export default function Home() {
  return (
    <MinimalHome />
  )
}
