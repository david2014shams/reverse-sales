from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from dotenv import load_dotenv
import os
import openai
openai.api_key = os.getenv("OPENAI_API_KEY")
import json

# Load the data from the json file
load_dotenv()
with open('../data/real-estate.json') as f:
    data = json.load(f)

# Convert the json into a string 
data_str = json.dumps(data)

print(data_str)

prompt = ChatPromptTemplate.from_template(
    "Create a morgage application from the data provided. Imagine that income aready proofed {topic}"
)
output_parser = StrOutputParser()
model = ChatOpenAI(model="gpt-4-1106-preview")
chain = (
    {"topic": RunnablePassthrough()} 
    | prompt
    | model
    | output_parser
)

response = chain.invoke(data_str)

print(response)