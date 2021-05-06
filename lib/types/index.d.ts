/**
 * NationalId class
 */
declare class NationalId {
    private _value;
    private _isValid;
    /**
     * NationalId constructor
     * @param value NationalId value as string
     * @param isValid pass in true if you are sure this instance is valid and you would like to skip internal validation.
     *  otherwise, internal validation would be triggered
     */
    constructor(value: string, isValid?: boolean);
    /**
     * get nationalId UID
     */
    get getUID(): string;
    /**
     * get parity code
     */
    get getParity(): string;
    /**
     * get sector code for national Id
     */
    get getSectorCode(): string;
    /**
     * returns validity of national id isntance
     */
    get IsValid(): boolean;
    /**
     * National id Value
     */
    get Value(): string;
    /**
     * Not valid national id instance
     * @static
     */
    static NotValid: NationalId;
    ToString: () => string;
    /**
     * Format national id with following format XXX-XXXXXX-X
     * @returns Formatted NationalId
     *
     */
    ToFormattedString: () => string;
    /**
     * create new instance of national id
     * @param value national id value
     * @returns new national id instance if it is valid or NationalId.NotValid instance
     * @static
     */
    static create(value: string): NationalId;
    /**
     * Validate national id
     * @param value National Id value
     * @returns true whether provided national id is valid
     */
    static IsValid(value: any): boolean;
}
export default NationalId;
