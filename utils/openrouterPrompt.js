const buildPrompt = (topic) => {
    return `
  Create a detailed course lesson on: "${topic}"
  
  Structure:
  1. Lesson Title & Description
  2. Learning Outcomes
  3. Key Concepts & Terminology
  4. Activities/Examples
  5. Resources
  
  The tone should be friendly yet educational. Keep formatting readable with bullet points or sub-headings.
  `;
  };
  
  module.exports = buildPrompt;
  
