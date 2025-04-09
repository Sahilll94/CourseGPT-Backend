module.exports = buildPrompt;

const buildPrompt = (topic) => {
  return `
Create a detailed course lesson on the topic: **"${topic}"**

Structure:

1. Lesson Title & Description
   - Provide a clear and engaging title.
   - Write a short description (2–4 sentences) summarizing the lesson.

2. Learning Outcomes
   - List specific skills or knowledge learners will gain.
   - Use bullet points for clarity.

3. Key Concepts & Terminology
   - Define important terms or concepts related to the topic.
   - Include brief explanations or examples.

4. Activities / Examples
   - Include interactive exercises, examples, or thought questions.
   - Aim to reinforce understanding of key concepts.

5. Resources
   - Suggest articles, videos, or tools to explore the topic further.

Tone:
Friendly yet educational.  
Keep formatting readable using headings and bullet points. Write each section in a descriptive and elaborative manner.
`;
};

  module.exports = buildPrompt;

// module.exports = buildPrompt;

// const buildPrompt = (topic) => {
//     return 
//   Create a detailed course lesson on: "${topic}"
  
//   Structure:
//   1. Lesson Title & Description
//   2. Learning Outcomes
//   3. Key Concepts & Terminology
//   4. Activities/Examples
//   5. Resources
  
//   The tone should be friendly yet educational . Keep formatting readable with bullet points or sub-headings and keep each section descriptive and in elaborative manner.
//   ;
//   };
  
//   module.exports = buildPrompt;
