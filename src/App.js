



import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';

// Navbar
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">🚀 SPA Routing</Link>
        <ul className="navbar-nav ms-auto d-flex flex-row">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/exp1">Exp-1</Link></li>
          <li><Link className="nav-link" to="/exp2">Exp-2</Link></li>
          <li><Link className="nav-link" to="/exp3">Exp-3</Link></li>
          <li><Link className="nav-link" to="/exp4">Exp-4</Link></li>
        </ul>
      </div>
    </nav>
  );
}

// Home Page
function Home() {
  return (
    <div className="container mt-5">
      <h1>Single Page Application Routing</h1>
      <p className="lead">All 4 experiments demonstrating React Router concepts</p>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5>Experiment 1</h5>
              <p>Basic routing with components</p>
              <Link to="/exp1" className="btn btn-sm btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5>Experiment 2</h5>
              <p>Navigation with Link component</p>
              <Link to="/exp2" className="btn btn-sm btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5>Experiment 3</h5>
              <p>Route parameters</p>
              <Link to="/exp3" className="btn btn-sm btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5>Experiment 4</h5>
              <p>404 Fallback route</p>
              <Link to="/exp4" className="btn btn-sm btn-primary">Go</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Experiment 1: Basic Routing
function Experiment1() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container mt-5">
      <h2>Experiment 1: Basic Client-Side Routing</h2>
      <div className="card">
        <div className="card-body">
          <p><strong>Objective:</strong> Implement basic routing using BrowserRouter, Routes, Route</p>
          <p><strong>Current Route:</strong> /exp1</p>
          <hr />
          <h5>What you see:</h5>
          <ul>
            <li>URL changed to /exp1 ✓</li>
            <li>Different component rendered ✓</li>
            <li>No page reload ✓</li>
          </ul>
          <hr />
          <h5>Interactive Demo - Counter:</h5>
          <h3>{count}</h3>
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
          <button className="btn btn-secondary ms-2" onClick={() => setCount(0)}>Reset</button>
          <p className="text-muted mt-2 small">State persists while on this route</p>
        </div>
      </div>
    </div>
  );
}

// Experiment 2: Link Component & Dynamic Content
function Experiment2() {
  const [selected, setSelected] = useState(1);
  
  const users = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Carol', role: 'Manager' }
  ];
  
  const user = users.find(u => u.id === selected);

  return (
    <div className="container mt-5">
      <h2>Experiment 2: Navigation with Link & Dynamic Content</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <strong>Objective:</strong> Use Link component for smooth navigation
            </div>
            <div className="card-body">
              <p><strong>Current Route:</strong> /exp2</p>
              <h5>Why Link instead of &lt;a&gt;?</h5>
              <ul>
                <li>❌ &lt;a&gt; = Page reload</li>
                <li>✅ Link = No reload, client-side only</li>
              </ul>
              <p className="text-muted small mt-3">All navbar links use &lt;Link&gt; component!</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <strong>Select User:</strong>
            </div>
            <div className="card-body">
              {users.map(u => (
                <button 
                  key={u.id}
                  className={`btn me-2 ${selected === u.id ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setSelected(u.id)}
                >
                  {u.name}
                </button>
              ))}
              <hr />
              {user && (
                <div>
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Role:</strong> {user.role}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Experiment 3: Route Parameters
function UserDetail() {
  const { userId } = useParams();
  
  const usersData = {
    1: { name: 'Alice Johnson', dept: 'Engineering' },
    2: { name: 'Bob Smith', dept: 'Design' },
    3: { name: 'Carol White', dept: 'Management' }
  };
  
  const user = usersData[userId];

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5>User ID: {userId}</h5>
        {user ? (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Department:</strong> {user.dept}</p>
          </>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </div>
  );
}

function Experiment3() {
  return (
    <div className="container mt-5">
      <h2>Experiment 3: Route Parameters</h2>
      <div className="card mb-3">
        <div className="card-body">
          <p><strong>Objective:</strong> Create dynamic routes with URL parameters (/user/:id)</p>
          <p><strong>Current Route:</strong> /exp3</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">User Links</div>
            <div className="card-body">
              <Link to="/user/1" className="d-block mb-2">👤 User 1</Link>
              <Link to="/user/2" className="d-block mb-2">👤 User 2</Link>
              <Link to="/user/3" className="d-block mb-2">👤 User 3</Link>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <p className="text-muted">Click user links above to see URL parameters in action</p>
          <UserDetail />
        </div>
      </div>
    </div>
  );
}

// Experiment 4: 404 & Fallback Route
function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <div className="card">
        <div className="card-body py-5">
          <h1>❌ 404</h1>
          <h4>Page Not Found</h4>
          <p>This route doesn't exist. (Fallback route: *)</p>
          <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    </div>
  );
}

function Experiment4() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2>Experiment 4: Fallback Routes & Error Handling</h2>
      <div className="card">
        <div className="card-body">
          <p><strong>Objective:</strong> Handle undefined routes with fallback</p>
          <p><strong>Current Route:</strong> /exp4</p>
          <hr />
          <h5>Route Mapping:</h5>
          <table className="table table-sm">
            <tbody>
              <tr><td>/</td><td>Home</td></tr>
              <tr><td>/exp1</td><td>Experiment 1</td></tr>
              <tr><td>/exp2</td><td>Experiment 2</td></tr>
              <tr><td>/exp3</td><td>Experiment 3</td></tr>
              <tr><td>/exp4</td><td>Experiment 4</td></tr>
              <tr><td>/user/:id</td><td>User Detail</td></tr>
              <tr className="table-danger"><td>*</td><td><strong>404 Not Found (Fallback)</strong></td></tr>
            </tbody>
          </table>
          <hr />
          <h5>Test Fallback Route:</h5>
          <button className="btn btn-danger" onClick={() => navigate('/invalid')}>
            Try /invalid
          </button>
          <button className="btn btn-danger ms-2" onClick={() => navigate('/notexist')}>
            Try /notexist
          </button>
          <p className="text-muted mt-3 small">Click buttons to navigate to undefined routes and see 404 page</p>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exp1" element={<Experiment1 />} />
        <Route path="/exp2" element={<Experiment2 />} />
        <Route path="/exp3" element={<Experiment3 />} />
        <Route path="/user/:userId" element={<UserDetail />} />
        <Route path="/exp4" element={<Experiment4 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

