import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, XCircle, Loader2 } from 'lucide-react';

interface Submission {
  name: string;
  email: string;
  userType: string;
  company?: string;
  service?: string;
  socialPlatform?: string;
  socialUsername?: string;
  contactNumber: string;
  message: string;
  submittedAt: string;
  status: 'pending' | 'success' | 'failed';
}

const SubmissionsHistory = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedSubmissions = localStorage.getItem('creatorverse_submissions');
      if (savedSubmissions) {
        setSubmissions(JSON.parse(savedSubmissions));
      }
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getStatusIcon = (status: Submission['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-amber-400" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <Card className="bg-gray-900/50 border-white/10">
        <CardContent className="p-6 text-center text-gray-400">
          No submissions found
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {submissions.map((submission, index) => (
        <Card key={index} className="bg-gray-900/50 border-white/10 hover:border-amber-400/30 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{submission.name}</h3>
                <p className="text-gray-400 text-sm mb-1">{submission.email}</p>
                <p className="text-gray-400 text-sm mb-3">{submission.contactNumber}</p>
                
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="text-gray-400">Type:</span>{' '}
                    <span className="text-white">{submission.userType}</span>
                  </p>
                  
                  {submission.userType === 'organization' ? (
                    <>
                      <p className="text-sm">
                        <span className="text-gray-400">Company:</span>{' '}
                        <span className="text-white">{submission.company}</span>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-400">Service:</span>{' '}
                        <span className="text-white">{submission.service}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm">
                        <span className="text-gray-400">Platform:</span>{' '}
                        <span className="text-white">{submission.socialPlatform}</span>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-400">Username:</span>{' '}
                        <span className="text-white">{submission.socialUsername}</span>
                      </p>
                    </>
                  )}
                </div>

                <p className="mt-4 text-sm text-gray-300">{submission.message}</p>
              </div>

              <div className="flex flex-col items-end space-y-2">
                {getStatusIcon(submission.status)}
                <span className="text-xs text-gray-400">
                  {formatDate(submission.submittedAt)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SubmissionsHistory;