'use client';
import Header from "./components/Header";

import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery, QueryClient,
  QueryClientProvider,} from "@tanstack/react-query";
import {HomeType} from "@/app/types/Home";


export default function Home() {

  return (
      <Header />
  )
}
