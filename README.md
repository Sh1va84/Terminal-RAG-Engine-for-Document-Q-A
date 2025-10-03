🚀 DSA-GPT: Your Personal AI Data Structures & Algorithms Expert 🚀
Meet DSA-GPT, a powerful, conversational AI chatbot that lives in your terminal. Built with the cutting-edge Google Gemini models and the Pinecone vector database, this tool transforms any Data Structures and Algorithms PDF into your personal, interactive tutor.

Ask complex questions, get instant, context-aware answers, and never get lost in a textbook again.

(Image: A simulated demonstration of the chatbot in a terminal.)

✨ Core Features
🧠 Conversational Memory: Don't repeat yourself! The chatbot understands the context of your conversation. You can ask follow-up questions like "What's its time complexity?" and it will know what "it" refers to.

📚 Retrieval-Augmented Generation (RAG): Answers are not hallucinated. The bot fetches relevant information directly from your provided dsa.pdf document, ensuring responses are accurate and grounded in your source material.

🎯 Expert Persona: With a specialized system prompt, the AI behaves like a seasoned DSA expert, providing clear, concise, and educational answers.

🔒 Fact-Checked Responses: The bot is strictly instructed to only answer based on the provided document. If the information isn't there, it will tell you, preventing misinformation.

🚀 Blazing Fast & Efficient: Utilizes the highly-efficient gemini-2.0-flash for generation and text-embedding-004 for state-of-the-art embeddings, delivering quick and relevant results.

🔌 Modular & Easy to Use: A simple two-step process: first, index your document once; then, chat with it forever.

⚙️ How It Works: The Architecture
This project uses a powerful RAG (Retrieval-Augmented Generation) pipeline. It's a two-stage process.

Phase 1: Indexing (index.js)
This is a one-time setup process that creates the knowledge base for our AI.

Load: The dsa.pdf file is loaded into the application.

Chunk: The document is broken down into smaller, overlapping text chunks. This allows the AI to find highly specific and relevant pieces of information.

Embed: Each text chunk is converted into a numerical representation (a vector embedding) using Google's text-embedding-004 model. These embeddings capture the semantic meaning of the text.

Store: The chunks and their corresponding embeddings are uploaded and stored in a Pinecone vector index, creating a searchable knowledge library.

Phase 2: Querying & Chatting (query.js)
This is the interactive loop where the magic happens.

User Question: You ask a question in the command line (e.g., "What is it?").

Query Transformation: This is the secret sauce for our conversational memory. The AI takes your new question and the previous chat history and rewrites it into a complete, standalone question.

Your follow-up: "What is its time complexity?"

Chat History: "User: Tell me about Bubble Sort."

Rewritten Query: "What is the time complexity of Bubble Sort?"

Embed Query: The new, complete question is converted into a vector embedding.

Search: This query vector is sent to Pinecone, which performs a similarity search and retrieves the top k most relevant text chunks from the original PDF.

Augment & Generate: The retrieved chunks (the "context") and the rewritten query are passed to the gemini-2.0-flash model with a precise prompt:

"You are a DSA expert. Answer the user's question based only on the following context..."

Response: The model generates a human-like answer based on the provided facts and sends it back to you. The conversation is then stored for future context.

🛠️ Tech Stack
Language: Node.js

LLM & Embeddings: Google Gemini (gemini-2.0-flash, text-embedding-004)

Vector Database: Pinecone

Frameworks/Libraries: LangChain.js, Google GenAI SDK, Pinecone SDK, readline-sync

🚀 Getting Started
Follow these steps to get your personal DSA expert up and running.

1. Prerequisites
Node.js (v18 or higher)

An API key for Google AI Studio (Gemini)

A Pinecone account (the free tier is sufficient) and an API key.

2. Installation
Clone the repository:

Bash

git clone https://github.com/your-username/dsa-gpt.git
cd dsa-gpt
Install dependencies:

Bash

npm install
Set up your environment variables:
Create a file named .env in the root of the project and add the following, replacing the placeholders with your actual credentials.

Code snippet

# .env

# Get from Google AI Studio -> https://makersuite.google.com/app/apikey
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"

# Get from your Pinecone dashboard -> https://app.pinecone.io/
PINECONE_API_KEY="YOUR_PINECONE_API_KEY"
PINECONE_INDEX_NAME="your-pinecone-index-name"
Note: Make sure your Pinecone index is created with dimensions matching the embedding model (768 for text-embedding-004).

Add your knowledge base:
Place your Data Structures and Algorithms PDF file in the root of the project directory and name it dsa.pdf.

3. Usage
Step 1: Index your document
Run this script once to process your PDF and store it in Pinecone. This may take a few minutes depending on the size of your document.

Bash

node index.js
You should see console logs indicating the progress: step load, step2, e, pine, stored embedding.

Step 2: Start chatting!
Now you're ready to chat. Run the query script to start the interactive session.

Bash

node query.js
The terminal will prompt you with Ask me anything-->. Start your conversation!

💬 Example Interaction
Ask me anything--> Tell me about binary search trees.

A binary search tree (BST) is a node-based binary tree data structure which has the following properties: The left subtree of a node contains only nodes with keys lesser than the node’s key. The right subtree of a node contains only nodes with keys greater than the node’s key. The left and right subtree each must also be a binary search tree.

Ask me anything--> what are the main operations on it?

Based on the provided context, the main operations on a Binary Search Tree are Searching, Insertion, and Deletion.

Ask me anything--> how does insertion work?

To insert a new key into a BST, you start at the root. If the key is less than the root's key, you move to the left child. If the key is greater than the root's key, you move to the right child. You continue this process until you find a leaf node. The new key is then inserted as the appropriate child (left or right) of that leaf node.

