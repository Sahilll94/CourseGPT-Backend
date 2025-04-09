# CourseGPT-Backend

## 📍 Endpoint

### `POST https://coursegpt-backend.onrender.com/api/generate-lesson`

This endpoint is used to generate a lesson based on a given topic. You send a JSON payload with the topic you want a lesson on, and the API will return structured lesson content.

---

## 📝 Request Details

### 🔹 Method:
`POST`

### 🔹 URL:
`https://coursegpt-backend.onrender.com/api/generate-lesson`

### Request Body (JSON)
```
{
  "topic": "Introduction to Object Oriented Programming"
}
```
The user can send the topics in JSON format with key as topic and value as the question that they want to ask.

### About the AI Model
#### We have used OpenRouter which is the unified interface for LLMs where I have selected OpenAI ```gpt-4o-mini``` model for generating the educational content.
