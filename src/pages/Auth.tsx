
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <AuthForm mode={mode} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
