import React, { useState } from "react";
import Text from "./component/TextInput";
import Button from "./component/Button";
import Checkbox from "./component/Checkbox";
//css
import "./globalStyle.css"

function Calculator() {
    const [formSatu, setFormSatu] = useState({ name: '', value: '', status: false });
    const [formDua, setFormDua] = useState({ name: '', value: '', status: false });
    const [formTiga, setFormTiga] = useState({ name: '', value: '', status: false });
    const [error, setError] = useState(false);
    const [hasil, setHasil] = useState(0);

    const onChecked = (e) => {
        const name = e.target.name;
        const value = e.target.checked;

        switch (name) {
            case "input_1":
                if (value === true);
                setFormSatu({
                    name: formSatu.name,
                    value: formSatu.value,
                    status: value
                })
                break;
            case "input_2":
                if (value === true);
                setFormDua({
                    name: formDua.name,
                    value: formDua.value,
                    status: value
                })
                break;
            case "input_3":
                if (value === true);
                setFormTiga({
                    name: formTiga.name,
                    value: formTiga.value,
                    status: value
                })
                break;
            default:
                break;
        }
    }

    const Calculate = (e) => {
        e.preventDefault();
        let val = e.target.value;
        let data = [formSatu, formDua, formTiga]
        const find = data.filter(item => item.status === true);
        const v = find.map((item) => parseInt(item.value))

        if (find.length <= 1) {
            errors();
        } else {
            switch (val) {
                case "+":
                    if (v.length === 2) {
                        setHasil(v[0] + v[1])
                    } else {
                        setHasil(v[0] + v[1] + v[2])
                    }
                    break;
                case "-":
                    if (v.length === 2) {
                        setHasil(v[0] - v[1])
                    } else {
                        setHasil(v[0] - v[1] - v[2])
                    }
                    break;
                case "*":
                    if (v.length === 2) {
                        setHasil(v[0] * v[1])
                    } else {
                        setHasil(v[0] * v[1] * v[2])
                    }
                    break;
                case "/":
                    if (v.length === 2) {
                        setHasil(v[0] / v[1])
                    } else {
                        setHasil(v[0] / v[1] / v[2])
                    }
                    break;
                default:
                    break;
            }
        }
    }

    const errors = () => {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 2000);
    }

    return (
        <div className="calculator">
            <h1>Calculator Sederhana</h1>
            {error && (
                <div className="alert">
                    Penjumlah Tidak Bisa Di Proses
                </div>
            )}
            <form>
                <div className="input">
                    <Text
                        name="input_1"
                        value={formSatu.value}
                        onChange={(e) => setFormSatu({ name: e.target.name, value: e.target.value })} />
                    <Checkbox checked name="input_1" onChange={onChecked} />
                </div>
                <div className="input">
                    <Text
                        name="input_2"
                        value={formDua.value}
                        onChange={(e) => setFormDua({ name: e.target.name, value: e.target.value })} />
                    <Checkbox checked name="input_2" onChange={onChecked} />
                </div>
                <div className="input">
                    <Text
                        name="input_3"
                        value={formTiga.value}
                        onChange={(e) => setFormTiga({ name: e.target.name, value: e.target.value })} />
                    <Checkbox checked name="input_3" onChange={onChecked} />
                </div>
                <div className="button-group">
                    <Button label="+" value="+" onClick={Calculate} />
                    <Button label="-" value="-" onClick={Calculate} />
                    <Button label="x" value="*" onClick={Calculate} />
                    <Button label="/" value="/" onClick={Calculate} />
                </div>
            </form>
            <div className="footer">
                <hr />
                <div className="hasil">
                    <div>Hasil :  </div>
                    <span>{hasil}</span>
                </div>
            </div>
        </div >
    )
}
export default Calculator
