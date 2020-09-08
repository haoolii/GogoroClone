import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

export default function PowerChart({ datas, width, height }) {
  const svgEl = useRef(null);
  const [padding, setPadding] = useState(10);
  const [first, setFirst] = useState(true);
  const [svg, setSvg] = useState(null);
  const [rootLayer, setRootLayer] = useState(null);
  const [lineLayer, setLineLayer] = useState(null);
  const [areaLayer, setareaLayer] = useState(null);
  const [xExtent, setXExtent] = useState(null);
  const [yExtent, setYExtent] = useState(null);

  const renderInital = () => {
    const _svg = d3
      .select(svgEl.current)
      .attr('width', width)
      .attr('height', height);
    const _rootLayer = _svg.append('g');
    const _lineLayer = _rootLayer.append('g');
    const _areaLayer = _rootLayer.append('g');
    setSvg(_svg);
    setRootLayer(_rootLayer);
    setLineLayer(_lineLayer);
    setareaLayer(_areaLayer);
    renderLinearColor({ svg: _svg });
  };

  const renderExtent = () => {
    setXExtent([
      d3.min(datas.map((data) => data.time)),
      d3.max(datas.map((data) => data.time)),
    ]);
    setYExtent(d3.extent(datas, (data) => data.value));
  };

  const renderLinearColor = ({ svg }) => {
    const linearGradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'lineColor');
    linearGradient
      .append('stop')
      .attr('offset', '5%')
      .attr('stop-color', '#1a5099');
    linearGradient
      .append('stop')
      .attr('offset', '95%')
      .attr('stop-color', '#4bd7f7');

    const linearAreaGradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'areaColor')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', 1);

    linearAreaGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-opacity', '0.5')
      .attr('stop-color', '#11325e');
    linearAreaGradient
      .append('stop')
      .attr('offset', '50%')
      .attr('stop-color', '#11325e')
      .attr('stop-opacity', '0.2');
    linearAreaGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#11325e')
      .attr('stop-opacity', '0');
  };

  const renderView = () => {
    let yScale = d3
      .scaleLinear()
      .range([height - padding * 2, 0])
      .domain([0, 180]);
    let xScale = d3.scaleTime().range([0, width]).domain(xExtent);

    let line = d3
      .line()
      .x((d) => xScale(d.time))
      .y((d) => yScale(d.value))
      .curve(d3.curveNatural);

    let paths = lineLayer.selectAll('path').data([datas]);
    paths
      .enter()
      .append('path')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'url(#lineColor)')
      .attr('stroke-width', 5);

    paths.transition().duration(1000).attr('d', line);
    paths.exit().remove();

    let area = d3
      .area()
      .x((d) => xScale(d.time))
      .y0((d) => yScale(d.value))
      .y1(height)
      .curve(d3.curveNatural);

    let areas = areaLayer.selectAll('path').data([datas]);

    areas
      .enter()
      .append('path')
      .attr('d', area)
      .attr('fill', 'url(#areaColor)');

    areas.transition().duration(1000).attr('d', area);
    areas.exit().remove();
  };

  useEffect(() => {
    renderInital();
  }, []);

  useEffect(() => {
    svg && renderExtent();
  }, [datas, svg]);

  useEffect(() => {
    svg && renderView();
  }, [xExtent, yExtent, setXExtent, setYExtent]);

  return (
    <div className="power__chart">
      <svg ref={svgEl}></svg>
    </div>
  );
}
