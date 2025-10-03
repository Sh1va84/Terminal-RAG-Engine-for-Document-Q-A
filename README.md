# 🤖 Terminal RAG Engine for Document Q&A

**Intelligent, Conversational Question-Answering for Local Documents**

This project implements a robust Retrieval-Augmented Generation (RAG) system entirely in the command line, enabling users to ask history-aware questions about local PDF documents (like documentation or textbooks) and receive grounded answers.

It uses a two-phase pipeline for document indexing and runtime conversational querying, powered by LangChain.js, Pinecone, and the Google Gemini API.

## ✨ Features & Technical Highlights

* **Conversational Q&A:** Supports multi-turn dialogue by integrating chat history.
* **History-Aware Query Transformation:** Implements a custom module to rephrase ambiguous follow-up questions into standalone queries using the `gemini-2.0-flash` model, ensuring high contextual accuracy.
* **Grounded Generation:** The LLM acts as a "Data Structure and Algorithm Expert" and is strictly constrained to answer **ONLY** based on the retrieved context, eliminating hallucinations.
* **Vector Search Engine:** Utilizes the Pinecone Vector Database for high-performance similarity search and context retrieval.
* **Modular Pipeline:** Features a two-phase architecture: one script for indexing (`index.js`) and one for conversational querying (`query.js`).

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Orchestration** | `Node.js` | Backend Runtime |
| **RAG Framework** | `LangChain.js` | [cite_start]Pipeline and Component Management [cite: 30, 32, 36] |
| **LLM/Embeddings** | `Google Gemini API` (`gemini-2.0-flash`, `text-embedding-004`) | Query Rewriting, Answer Generation, and Vector Embeddings |
| **Vector Database** | `Pinecone` | High-performance Vector Storage and Retrieval |
| **Utilities** | `dotenv`, `readline-sync` | Configuration and Command Line Interface |

## 🚀 Setup & Installation

### Prerequisites

1.  Node.js (LTS version)
2.  A PDF document to index (e.g., your local `./dsa.pdf` file).
3.  API Keys for:
    * **Google Gemini API Key**
    * **Pinecone API Key** and **Environment Name**

### Step 1: Clone the Repository

```bash
git clone [https://github.com/Sh1va84/Terminal-RAG-Engine-for-Document-Q-A.git](https://github.com/Sh1va84/Terminal-RAG-Engine-for-Document-Q-A.git)
cd Terminal-RAG-Engine-for-Document-Q-A
