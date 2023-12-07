/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useParams } from "next/navigation"

import React from 'react'

function page() {
    const params = useParams();
  return (
    <div className="text-white">
      {params['project-slug'        ]}
    </div>
  )
}

export default page
