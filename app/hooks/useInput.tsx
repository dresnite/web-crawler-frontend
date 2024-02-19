import { ChangeEvent, useState } from "react";

export default function useInput() {
    const [value, setValue] = useState<string>("");

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
    }

    return {value, handleOnChange};
}