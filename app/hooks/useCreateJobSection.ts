import { useState } from "react";

export default function useJobCreationSection() {
    const [isVisible, setVisible] = useState(false);

    function toggleVisibility() {
        setVisible(!isVisible);
    }

    return { isVisible, toggleVisibility };
}