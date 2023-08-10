import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

type Props = {
    onDelete: () => void;
    onBlock: () => void;
    onUnblock: () => void;
};

function Toolbar({ onDelete, onBlock, onUnblock }: Props) {
    return (
        <div className="toolbar m-5">
            <ButtonGroup>
                <Button variant="danger" onClick={onDelete}>
                    Delete
                </Button>
                <Button variant="warning" onClick={onBlock}>
                    Block
                </Button>
                <Button variant="success" onClick={onUnblock}>
                    Unblock
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default Toolbar;
