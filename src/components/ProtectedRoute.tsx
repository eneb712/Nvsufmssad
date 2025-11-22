import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { hasPermission } from '../utils/rolePermissions';
import { Card } from './ui/card';
import { AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

interface ProtectedRouteProps {
  module: string;
  children: React.ReactNode;
}

export function ProtectedRoute({ module, children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (!userRole) {
      navigate('/login');
    }
  }, [navigate]);

  if (!hasPermission(module)) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md p-8 border-2 border-red-200 bg-red-50">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h2 className="text-2xl text-gray-900 mb-2">Access Denied</h2>
            <p className="text-gray-700 mb-6">
              You do not have permission to access this module. Please contact your administrator if you believe this is an error.
            </p>
            <Button onClick={() => navigate('/')} className="bg-blue-600 hover:bg-blue-700">
              Return to Dashboard
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
