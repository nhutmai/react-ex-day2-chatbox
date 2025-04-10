function TextInput({ value, onChange }: { value: string ,onChange: (value: string) => void }) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type a message..."
            style={{ flex: 1, padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
    );
}

export default TextInput;