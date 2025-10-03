// pdf load krna 
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { PineconeStore } from '@langchain/pinecone';

import { Pinecone } from '@pinecone-database/pinecone';

import * as dotenv from 'dotenv';
dotenv.config();

async function indexDocument(){
// pdf load 
const PDF_PATH = './dsa.pdf';
const pdfLoader = new PDFLoader(PDF_PATH);
const rawDocs = await pdfLoader.load();
console.log("step load");

// chunking of documnet


const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize:1000,
    chunkOverlap:200,
  });
const chunkedDocs = await textSplitter.splitDocuments(rawDocs);
// initiate embedding model gemini

console.log("step2");
const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: 'text-embedding-004',
  });
console.log("e");
// datbse configured  pinecone client 


const pinecone = new Pinecone();
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME);

console.log("pine");
// langchain chunking ,embedding ,databse 




await PineconeStore.fromDocuments(chunkedDocs, embeddings, {
    pineconeIndex,
    maxConcurrency: 5,
  });

console.log("stored embedding");
}

indexDocument();










// Will automatically read the PINECONE_API_KEY and PINECONE_ENVIRONMENT env vars





//import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";


// const embeddings = new GoogleGenerativeAIEmbeddings({
//   model: "text-embedding-004", // 768 dimensions

// });