import * as React from 'react';
import { createRoot } from 'react-dom/client';

import Providers from "@/frontend/src/Providers";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<Providers />);
