export const randomString = (len: number = 6) =>
    (Math.random() + 1).toString(36).substring(len)

/**
 *
 * @param condition
 * @param timeout
 * @returns
 */
export const waitFor = async (
    condition: () => boolean,
    timeout: number = 10000,
) => {
    const tick = 250
    let duration = 0

    return new Promise((resolve, reject) => {
        const check = () => {
            duration += tick

            if (!condition()) {
                if (duration < timeout) {
                    window.setTimeout(check, 250)
                } else {
                    reject()
                }
            } else {
                resolve(condition())
            }
        }

        check()
    })
}
