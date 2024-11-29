from openai import OpenAI
import os
from dotenv import load_dotenv

# Load the API key
load_dotenv()
print(f"OpenAI API Key: {os.getenv('OPEN_API_KEY')}")


client = OpenAI(
    api_key=os.getenv("OPEN_API_KEY")  # Retrieves the key from the .env file
)


try:
    response = client.chat.completions.create(
      model="gpt-3.5-turbo",
      messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Write a creative opening line for a mystery novel."}
      ],
      max_tokens=100
    )
    print(response)
except Exception as e:
    print(f"Error: {e}")