##  AWS Cloud Deployment (Free Tier)

This project is fully deployed on AWS Free Tier using a secure and scalable architecture. Below is a summary of services used and setup steps:

### 🔧 Services Used

| Service         | Purpose |
|------------------|---------|
| **EC2**          | A virtual server (`t3.micro` - Free Tier) used to host and run the Spring Boot JAR file. |
| **RDS**          | Managed MySQL database service used to store student records and department data. |
| **S3**           | Used for frontend hosting. The React `build/` folder was uploaded to S3 for public access as a static website. |
| **IAM Roles**    | Secure access control. Created 2 roles: `s3fullaccess` and `ec2fullaccess`, and attached them to EC2. |
| **CloudWatch**   | Used for monitoring logs. Alternatively, logs can also be manually viewed via SSH terminal into EC2. |
| **GitHub Actions** | CI/CD pipeline to automatically deploy updated backend code to EC2 whenever changes are pushed to GitHub. |
| **VPC**          | EC2 resides in public subnet (with internet access), and RDS resides in private subnet (not publicly accessible). |



<img width="1819" height="894" alt="Screenshot 2025-07-17 210928" src="https://github.com/user-attachments/assets/47817105-c160-4492-95f9-6f3f5f5b48fa" />
<img width="1919" height="475" alt="Screenshot 2025-07-17 211325" src="https://github.com/user-attachments/assets/4c24289f-94a4-430f-b89b-81766cd0d8da" />
<img width="1914" height="843" alt="Screenshot 2025-07-17 212006" src="https://github.com/user-attachments/assets/ea445bd0-8476-4c95-9833-7a23c30e778a" />
<img width="1904" height="909" alt="Screenshot 2025-07-17 212227" src="https://github.com/user-attachments/assets/0de5374c-3e77-4b9e-a687-f3959ae68058" />
<img width="1902" height="848" alt="Screenshot 2025-07-17 212800" src="https://github.com/user-attachments/assets/26dc952e-1529-4a05-876a-3ccb2ff578d8" />
<img width="1912" height="911" alt="Screenshot 2025-07-17 213113" src="https://github.com/user-attachments/assets/cc588cb2-0e7b-4536-9dc9-0c9627aa8fcb" />
<img width="1067" height="419" alt="Screenshot 2025-07-18 100133" src="https://github.com/user-attachments/assets/013909b6-8927-4980-b780-e4ccdee94d78" />
<img width="1916" height="491" alt="Screenshot 2025-07-18 000128" src="https://github.com/user-attachments/assets/29c45e93-02a7-4b1f-b736-a2ee058573db" />
<img width="1919" height="779" alt="Screenshot 2025-07-18 102555" src="https://github.com/user-attachments/assets/13ab3485-a150-4302-a4f4-6a0faa9ee99f" />
<img width="1909" height="1018" alt="Screenshot 2025-07-18 105350" src="https://github.com/user-attachments/assets/e47d22bd-a02a-4c0d-a2d8-edd5f9050ec0" />
<img width="1919" height="505" alt="Screenshot 2025-07-18 105034" src="https://github.com/user-attachments/assets/f941596e-c959-4a2b-91a0-2d8237b6a495" />
<img width="1919" height="859" alt="Screenshot 2025-07-18 113018" src="https://github.com/user-attachments/assets/6693ca5b-7672-4020-abc2-398736084f25" />
<img width="1919" height="1015" alt="Screenshot 2025-07-18 113634" src="https://github.com/user-attachments/assets/b7a2e445-f1eb-4895-9d12-4275221dd290" />
<img width="1904" height="1033" alt="Screenshot 2025-07-18 115154" src="https://github.com/user-attachments/assets/3cdfb078-e813-439e-bac3-d5aef9b0abd2" />
<img width="1692" height="923" alt="Screenshot 2025-07-18 133706" src="https://github.com/user-attachments/assets/e5f55301-30b8-4561-8a8c-31c81a713c43" />

