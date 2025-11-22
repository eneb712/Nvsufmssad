import { TrendingUp, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function PostGeneralLedgerCollections() {
  const collections = [
    { id: 'COL-2024-001', type: 'Student Tuition', amount: '₱245,680.00', date: '2024-11-22', status: 'ready' },
    { id: 'COL-2024-002', type: 'Laboratory Fees', amount: '₱89,250.00', date: '2024-11-22', status: 'ready' },
    { id: 'COL-2024-003', type: 'Miscellaneous Fees', amount: '₱52,400.00', date: '2024-11-21', status: 'posted' },
  ];

  return (
    <ProtectedRoute module="post-general-ledger-collections">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Post General Ledger Collections</h1>
          <p className="text-gray-600">Post student collections and payments to the general ledger</p>
        </div>

        <div className="space-y-4">
          {collections.map((collection) => (
            <Card key={collection.id} className="border-2 border-gray-200 p-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl text-gray-900 mb-2">{collection.id}</h3>
                  <p className="text-gray-700 mb-1">{collection.type}</p>
                  <p className="text-sm text-gray-600">{collection.date}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl text-gray-900">{collection.amount}</p>
                    <Badge className={collection.status === 'posted' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}>
                      {collection.status === 'posted' ? 'Posted' : 'Ready to Post'}
                    </Badge>
                  </div>
                  {collection.status === 'ready' && (
                    <Button size="lg" className="h-14 bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 h-5 w-5" />
                      Post to GL
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
