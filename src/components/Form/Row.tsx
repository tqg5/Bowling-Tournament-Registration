import { FC } from 'react';

const style = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
};

interface RowProps {
    children: React.ReactNode
};

const Row: FC<RowProps> = ({ children }) => {
    return (
        <div sx={style}>
            {children}
        </div>
    )
}

export default Row;