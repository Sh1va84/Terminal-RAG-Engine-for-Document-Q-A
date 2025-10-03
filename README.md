# 🚀 DSA RAG Chatbot

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![Pinecone](https://img.shields.io/badge/Pinecone-000000?style=for-the-badge&logo=pinecone&logoColor=white)
![Google AI](https://img.shields.io/badge/Google_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

**An intelligent conversational AI assistant powered by RAG (Retrieval-Augmented Generation) for Data Structures & Algorithms learning**

[Features](#-features) • [Architecture](#-architecture) • [Installation](#-installation) • [Usage](#-usage) • [Configuration](#-configuration)

</div>

---

## 📋 Overview

This project implements a sophisticated RAG-based chatbot that serves as your personal Data Structures and Algorithms tutor. It processes PDF documents, creates vector embeddings, stores them in Pinecone vector database, and provides context-aware answers using Google's Gemini AI model.

## ✨ Features

### 🎯 Core Capabilities

- **📄 PDF Document Processing**: Automatically loads and processes DSA PDF materials
- **🔪 Intelligent Chunking**: Splits documents into optimal chunks (1000 characters with 200-character overlap) for better retrieval
- **🧠 Vector Embeddings**: Uses Google's `text-embedding-004` model for high-quality semantic embeddings (768 dimensions)
- **💾 Vector Database**: Leverages Pinecone for efficient similarity search and storage
- **🤖 Conversational AI**: Powered by Google's Gemini 2.0 Flash model for fast, accurate responses
- **💬 Chat History**: Maintains conversation context for natural, multi-turn dialogues
- **🔄 Query Rewriting**: Intelligently transforms follow-up questions into standalone queries
- **🎯 Context-Aware Responses**: Retrieves top 10 most relevant documents for each query
- **🛡️ Hallucination Prevention**: Only answers based on provided context, explicitly states when information isn't available

### 🌟 Advanced Features

- **Concurrent Processing**: Handles multiple embedding operations simultaneously (max concurrency: 5)
- **Smart Retrieval**: Top-K similarity search (K=10) with metadata inclusion
- **Educational Focus**: Responses are tailored for learning and understanding DSA concepts
- **Interactive CLI**: Real-time question-answering through command-line interface

## 🏗️ Architecture

```
┌─────────────────┐
│   PDF Document  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Document Loader │
│   (LangChain)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Text Splitter   │
│  (Recursive)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Embeddings     │
│  (Gemini AI)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Pinecone DB    │
│  Vector Store    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌──────────────┐
│  Query System    │────▶│  Gemini AI   │
│  (Similarity     │     │   Response   │
│   Search)        │     │  Generation  │
└─────────────────┘     └──────────────┘
```

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **LLM Framework**: LangChain
- **Vector Database**: Pinecone
- **AI Model**: Google Gemini 2.0 Flash
- **Embeddings**: Google Generative AI Embeddings (text-embedding-004)
- **Document Processing**: PDF Loader, Recursive Character Text Splitter
- **Environment Management**: dotenv
- **CLI Interface**: readline-sync

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google AI API Key
- Pinecone API Key and Index

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dsa-rag-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   touch .env
   ```

4. **Configure environment variables**
   ```env
   GEMINI_API_KEY=your_google_ai_api_key_here
   PINECONE_API_KEY=your_pinecone_api_key_here
   PINECONE_INDEX_NAME=your_index_name_here
   ```

5. **Add your PDF document**
   - Place your DSA PDF file in the project root
   - Name it `dsa.pdf` or update the path in `index.js`

## 🚀 Usage

### Step 1: Index Your Document

Run this once to process and store your PDF in the vector database:

```bash
node index.js
```

**Expected Output:**
```
step load
step2
e
pine
stored embedding
```

### Step 2: Start Chatting

Launch the interactive chatbot:

```bash
node query.js
```

**Example Conversation:**
```
Ask me anything--> What is a binary search tree?

A binary search tree is a tree data structure where each node has at most 
two children, and for each node, all values in the left subtree are less 
than the node's value, and all values in the right subtree are greater...

Ask me anything--> How does it differ from a regular binary tree?

Unlike a regular binary tree, a binary search tree maintains a specific 
ordering property that enables efficient searching, insertion, and deletion 
operations with O(log n) time complexity...
```

## ⚙️ Configuration

### Chunking Parameters

Adjust in `index.js`:
```javascript
const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,      // Size of each chunk
    chunkOverlap: 200,    // Overlap between chunks
});
```

### Retrieval Settings

Modify in `query.js`:
```javascript
const searchResults = await pineconeIndex.query({
    topK: 10,              // Number of documents to retrieve
    vector: queryVector,
    includeMetadata: true,
});
```

### Model Configuration

Change models in respective files:
- **Embeddings**: `text-embedding-004` (768 dimensions)
- **LLM**: `gemini-2.0-flash` (Fast inference, great for chat)

## 📁 Project Structure

```
dsa-rag-chatbot/
├── index.js           # Document indexing script
├── query.js           # Query and chat interface
├── dsa.pdf            # Your DSA PDF document
├── .env               # Environment variables (create this)
├── package.json       # Project dependencies
└── README.md          # This file
```

## 🔑 Key Components

### Document Indexing (`index.js`)

- Loads PDF documents using LangChain's PDF loader
- Splits documents into manageable chunks with overlap
- Generates vector embeddings using Google's embedding model
- Stores embeddings in Pinecone with metadata

### Query System (`query.js`)

- **Query Rewriting**: Transforms follow-up questions into standalone queries
- **Vector Search**: Finds relevant document chunks using similarity search
- **Context Building**: Aggregates top results into coherent context
- **Response Generation**: Uses Gemini AI with context to generate answers
- **Chat History**: Maintains conversation flow for natural interactions

## 🎓 Use Cases

- **DSA Learning**: Get instant answers about data structures and algorithms
- **Interview Prep**: Practice DSA concepts with an AI tutor
- **Quick Reference**: Look up specific algorithms or implementations
- **Concept Clarification**: Ask follow-up questions for deeper understanding
- **Document Q&A**: Query any DSA PDF document you have

## 🛡️ Best Practices

1. **Document Quality**: Use well-structured PDF documents for best results
2. **Chunk Size**: Adjust based on your document's content density
3. **Context Window**: Monitor the size of retrieved context for optimal performance
4. **Query Clarity**: Ask specific, clear questions for better responses
5. **Index Updates**: Re-run indexing when updating source documents

## 🐛 Troubleshooting

**Issue**: "Could not find answer in provided document"
- **Solution**: Question may be outside document scope or document not indexed properly

**Issue**: Slow response times
- **Solution**: Reduce `topK` value or check Pinecone index performance

**Issue**: Connection errors
- **Solution**: Verify API keys and network connectivity

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 💡 Future Enhancements

- [ ] Multi-document support
- [ ] Web interface using React/Next.js
- [ ] Export chat history
- [ ] Support for multiple file formats (DOCX, TXT, MD)
- [ ] Advanced filtering and metadata queries
- [ ] Caching layer for frequently asked questions
- [ ] Analytics dashboard for query insights

## 🙏 Acknowledgments

- LangChain for the amazing RAG framework
- Google AI for Gemini models
- Pinecone for vector database infrastructure

---

<div align="center">

**Made with ❤️ for DSA learners**

⭐ Star this repo if you find it helpful!

</div>
