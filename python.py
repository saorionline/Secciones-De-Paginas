# INPUTS (From Zapier/Make)
# lead_message: "Hi, we need a dev to help with a React/Python integration for 3 months."
# lead_email: "recruiter@bigtech.com"

# STEP 1: Define Tech Keywords
tech_stack_keywords = ["React", "Python", "Node", "No-Code", "Automation"]
found_skills = []

# STEP 2: Logic - Extract Tech Stack
for skill in tech_stack_keywords:
    if skill.lower() in lead_message.lower():
        found_skills.append(skill)

# STEP 3: Logic - Calculate "Match Score"
# High priority if it mentions Python AND Automation
match_score = 0
if "Python" in found_skills and "Automation" in found_skills:
    match_score = 95
elif "React" in found_skills:
    match_score = 70
else:
    match_score = 50

# STEP 4: AI Summarization (Pseudo-call to OpenAI API)
# "Create a 1-sentence summary of: {lead_message}"
ai_summary = "Recruiter looking for hybrid Python/React support for a 3-month contract."

# OUTPUTS (Send back to Notion)
# return {
#    "Skills": found_skills,
#    "Score": match_score,
#    "Summary": ai_summary
# }