import Button from 'components/ui/Button/Button'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '_state/features/counter/counterSlice'
import { State } from '_state/store'
export function Counter() {
  const count = useSelector((state: State)=> state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button
          label="Increment"
          aria-label="Decrement value"
          onClick={() => dispatch(increment())}
        />
          <span> {count} </span>
            <Button
            label="Decrement"
              aria-label="Decrement value"
            onClick = {() => dispatch(decrement())}
            />
            </div>
            </div>
            )
}