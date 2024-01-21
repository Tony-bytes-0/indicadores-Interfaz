"use client"
import {  Grid, Typography  } from '@mui/material';
import DataDisplay from './DataDisplay';
import Separador from '@/components/Separador';
import ActiveGraphs from './ActiveGraphs';
import LastMonthResume from './LastMonthResume';
import {  useDispatch, useSelector } from 'react-redux';
import { triageStateSet } from '@/redux/indicators/triageState'; import { diagnosticoStateSet } from '@/redux/indicators/diagnosticoState';
import { tensionStateSet } from '@/redux/indicators/tensionState'; import { atencionEspecialStateSet } from '@/redux/indicators/atencionEspecialState'
import { useEffect } from 'react';

export default function Page() {
    const dispatch = useDispatch()
    // Actual
    const triageNew = useSelector(state => state.provisionalData.triage)
    const atencionEspecialNew = useSelector(state => state.atencionEspecial.atencionEspecial)
    const diagnosticoNew = useSelector(state => state.diagnostico.diagnostico)
    const tensionNew = useSelector(state => state.tension.tension)
    // Mes anterior
    const triageOld = useSelector(state => state.lastMonth.triage)
    const diagnosticoOld = useSelector(state => state.lastMonth.diagnostico)
    const tensionOld = useSelector(state => state.lastMonth.tension)
    const atencionEspecialOld = useSelector(state => state.lastMonth.atencionEspecial)
    // Indicadores
    const triageState = useSelector(state => state.triageState.state)
    const diagnosticoState = useSelector(state => state.diagnosticoState.state)
    const tensionState = useSelector(state => state.tensionState.state)
    const atencionEspecialState = useSelector(state => state.atencionEspecialState.state)


    function doingGood(old, actual, percentage){//comparando totales

        if(actual <= old - old * percentage){//20% menos que el mes pasado
            return {good: true, low:false, medium: false, high: false, msj:'Todo normal'}
        }
        else if(actual <= old ){
            return {good: false, low:true, medium: false, high: false, msj:'Regular'}
        }
        else if(actual >= old + old * percentage){
            return {good: false, low:false, medium: true, high: false, msj:'Alerta'}
        }
        else return triageState

    }
        
    function giveMeTotal(obj){
    const x = Object.values(obj); let total = 0; for(let i of x){
        if(typeof(i) !== 'string'){ total+=i; }
    } return total
    }

    useEffect(() => {
        dispatch(triageStateSet(doingGood( giveMeTotal(triageOld), giveMeTotal( triageNew), 0.20)))//triage
        dispatch(diagnosticoStateSet(doingGood( giveMeTotal(diagnosticoOld), giveMeTotal( diagnosticoNew), 0.20)))//triage
        dispatch(tensionStateSet(doingGood( giveMeTotal(tensionOld), giveMeTotal( tensionNew), 0.20)))//triage
        dispatch(atencionEspecialStateSet(doingGood( giveMeTotal(atencionEspecialOld), giveMeTotal( atencionEspecialNew), 0.20)))//triage
        console.log(tensionState)
    },[])

    return <Grid container display={'flex'} className='my-10'>

        <Grid item xs= {12} > <Typography textAlign={'center'} fontSize={30}>Índice de atención en el ambulatorio urbano 1 Bernardino Martínez</Typography> </Grid>

        <Grid item xs={3}><DataDisplay text='Triaje' total={giveMeTotal(triageNew)} msj={triageState.msj} /></Grid>
        
        <Grid item xs={3}><DataDisplay text='Diagnóstico' total={giveMeTotal(diagnosticoNew)} msj={diagnosticoState.msj} /></Grid>

        <Grid item xs={3}><DataDisplay text='Tensión' total={giveMeTotal(tensionNew)} msj={tensionState.msj}  /></Grid>

        <Grid item xs={3}><DataDisplay text='Atención especial' total={giveMeTotal(atencionEspecialNew)} msj={atencionEspecialState.msj} /></Grid>

        <Separador />
        
        <ActiveGraphs  />

        <LastMonthResume text={'Resumen mes anterior'} /> 


    </Grid>
}
