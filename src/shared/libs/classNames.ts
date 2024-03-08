/* eslint-disable @typescript-eslint/no-unused-vars */
type OptionalClassName = Record<string, boolean>;

export const classNames = (...classes: (string | OptionalClassName | undefined)[]) => {
    let classString = '';

    classes.forEach((c) => {
        if (typeof c === 'string') classString += ` ${c}`;
        if (typeof c === 'object') {
            Object.entries(c).filter(([, v]) => v).forEach(([k,]) => { classString += ` ${k}`; });
        }
    });

    return classString.trim();
};
