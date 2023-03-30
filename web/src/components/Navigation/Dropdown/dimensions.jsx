import { useState, useCallback, useLayoutEffect } from "react";

const getDimensions = element => element.getBoundingClientRect()

export function useDimensions(responsive = true) {
    const [dimensions, setDimensions] = useState(null)
    const [element, setElement] = useState(null)

    const hook = useCallback(e => setElement(e), [])

    useLayoutEffect(() => {
        if (element) {
            const updatedDimensions = () => {
                window.requestAnimationFrame(() => {
                    setDimensions(getDimensions(element))
                })
            }

            updatedDimensions()

            if (responsive) {
                window.addEventListener('resize', updatedDimensions)

                return () => {
                    window.removeEventListener('resize', updatedDimensions)
                }
            }
        }
    }, [element, hook, responsive])

    return [hook, dimensions, element]
}