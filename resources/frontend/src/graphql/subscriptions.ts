import { gql } from '@apollo/client';

const SUBSCRIBE_TODO = gql`
    subscription todoCreated {
        TodoCreated {
            id
            title
            created_at
            updated_at
        }
    }
`
