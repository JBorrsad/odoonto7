module.exports = async (): Promise<void> => {
  const databaseUrl = process.env.DATABASE_URL || 'postgresql://test:test@localhost:5432/test';
  
  if (!databaseUrl.includes('test')) {
    throw new Error(
      `Current database URL is: ${databaseUrl}. Make sure database includes a word "test" to avoid writing into a main database.`,
    );
  }
}; 