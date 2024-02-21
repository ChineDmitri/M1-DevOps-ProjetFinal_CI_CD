FROM node:18

# Set environment variable for WORKDIR
ENV WORK_DIR /app

# Set the working directory
WORKDIR $WORK_DIR

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "sleep 25 && npm start"]