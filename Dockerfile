FROM ruby:3.2

# Install system dependencies
RUN apt-get update -qq && apt-get install -y \
    curl \
    gnupg2 \
    build-essential \
    libpq-dev \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js (LTS) and Yarn
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install --global yarn

# Set working directory
WORKDIR /app

# Set environment variables
ENV RAILS_ENV=production \
    BUNDLE_PATH=/gems

# Install gems (cached layer)
COPY Gemfile Gemfile.lock ./
RUN bundle install --without development test

# Copy the rest of the application
COPY . .

# Precompile assets
RUN bundle exec rake assets:precompile

# Expose the port Azure uses
EXPOSE 8080

# Run migrations and start server
CMD ["bash", "-c", "bundle exec rails db:migrate && bundle exec rails server -b 0.0.0.0 -p ${PORT:-8080}"]
