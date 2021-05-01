```bash
#!/bin/bash
# author: Amittai J. Wekesa (@siavava)
# Greetings! bash script.
# Usage: ./hello.sh
# 

# Enter your name here.
read -p "Name: ..." name
# Enter your origin
read -p "Origin: ..." origin

# Check the name
if [ -n $name ]; then
  # Check the place of origin
  if [ -n $origin ]; then
    echo "Hello $name from $origin!"
  else
    echo "Hello $name."
  fi
else
  echo "Sorry, we missed your name. Please try again."
fi

```
- 👋 Hi, I’m @siavava
- 👀 I’m interested in Theoretical Computation (Algorithms, etc.) and applied CS fields, particularly Machine Learning and Deep Learning
- 🌱 I code in Python, Java, Julia, C, TypeScript, F#, and sometimes in whichever language offers utility.
- 💞️ I’m looking to collaborate on really anything! Just ping me -- if it's doable and it's good then it's cool.
- 📫 How to reach me: Email: amittai.j.wekesa.24@dartmouth.EDU , LinkedIn: https://www.linkedin.com/in/siavava

<!---
siavava/siavava is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
