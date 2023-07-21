from pymongo import MongoClient
import os

url = os.getenv('MONGO')

# Set up MongoDB connection and collection
client = MongoClient(url)
# Create database named zomato if it doesn't exist already
db = client['parentGuide']
# Create collection named users if it doesn't exist already
user = db['users']
# Create collection named orders if it doesn't exist already
message = db['messages']