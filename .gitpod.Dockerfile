FROM gitpod/workspace-full:latest

# Install Node.js 18
RUN bash -c ". .nvm/nvm.sh && nvm install 18 && nvm use 18 && nvm alias default 18"

# Set Node 18 as default for all shells
RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/100-node