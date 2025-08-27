// Component Hierarchy

App
├── ProductList
│   └── ProductCard
└── ProductDetails

App - handles routing between pages
ProductList.jsx - fetches all products and displays them
ProductCard.jsx - shows individual product preview 
ProductDetails.jsx - shows detailed product information

// State Management

ProductList Component:
Has products, loading and error state
Fetches data from API and passes to ProductCard via props

ProductCard Component:
Receives product prop from ProductList
No state of its own

ProductDetails Component:
Has product and loading state
Gets product ID from URL and fetches individual product

App Component:
Sets up routing with React Router
No state management

// Data Flow

ProductList fetches all products and stores in state
ProductList passes each product to ProductCard as props
ProductCard handles click navigation to ProductDetails page
ProductDetails gets product ID from URL and fetches individual product 

